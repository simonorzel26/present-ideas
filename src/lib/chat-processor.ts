export type ChatMessage = {
	timestamp: string;
	sender: string;
	content: string;
};

export type ProcessedChatData = {
	messages: ChatMessage[];
	participants: string[];
	anonymizedContent: string;
};

const CHAT_PATTERN = /\[([^\]]+)\]\s+([^:]+):\s*(.*)/;

export function extractChatMessages(fileContent: string): ChatMessage[] {
	const lines = fileContent.split("\n");
	const messages: ChatMessage[] = [];

	for (const line of lines) {
		const match = line.match(CHAT_PATTERN);
		if (match) {
			const [, timestamp, sender, content] = match;
			if (timestamp && sender && content) {
				messages.push({
					timestamp: timestamp.trim(),
					sender: sender.trim(),
					content: content.trim(),
				});
			}
		}
	}

	return messages;
}

function extractLastChatMessages(
	fileContent: string,
	maxMessages: number,
): ChatMessage[] {
	const lines = fileContent.split("\n");
	const reversedMessages: ChatMessage[] = [];

	for (
		let i = lines.length - 1;
		i >= 0 && reversedMessages.length < maxMessages;
		i -= 1
	) {
		const line = lines[i];
		const match = line?.match(CHAT_PATTERN);
		if (!match) continue;

		const [, timestamp, sender, content] = match;
		if (!timestamp || !sender || !content) continue;

		reversedMessages.push({
			timestamp: timestamp.trim(),
			sender: sender.trim(),
			content: content.trim(),
		});
	}

	return reversedMessages.reverse();
}

export function anonymizeChatMessages(
	messages: ChatMessage[],
): ProcessedChatData {
	const uniqueSenders = [...new Set(messages.map((msg) => msg.sender))];
	const senderMap = new Map<string, string>();

	uniqueSenders.forEach((sender, index) => {
		senderMap.set(sender, `Person ${index + 1}`);
	});

	const anonymizedMessages = messages.map((msg) => ({
		...msg,
		sender: senderMap.get(msg.sender) || "Unknown",
	}));

	const anonymizedContent = anonymizedMessages
		.map((msg) => `[${msg.timestamp}] ${msg.sender}: ${msg.content}`)
		.join("\n");

	return {
		messages: anonymizedMessages,
		participants: Array.from(senderMap.values()),
		anonymizedContent,
	};
}

export function processChatFile(
	fileContent: string,
	maxMessages = 10000,
): ProcessedChatData {
	const start = performance.now();
	const limitedMessages = extractLastChatMessages(fileContent, maxMessages);
	const parseMs = Math.round(performance.now() - start);
	console.log(
		`Client: Parsed last ${limitedMessages.length} messages in ${parseMs}ms (cap ${maxMessages})`,
	);

	const anonStart = performance.now();
	const result = anonymizeChatMessages(limitedMessages);
	const anonMs = Math.round(performance.now() - anonStart);
	console.log(
		`Client: Anonymized ${result.messages.length} messages across ${result.participants.length} participants in ${anonMs}ms`,
	);

	return result;
}

export function estimateCost(inputTokens: number, outputTokens = 1000): number {
	const inputCostPerMillion = 0.1;
	const outputCostPerMillion = 0.4;

	const inputCost = (inputTokens / 1000000) * inputCostPerMillion;
	const outputCost = (outputTokens / 1000000) * outputCostPerMillion;

	return inputCost + outputCost;
}
