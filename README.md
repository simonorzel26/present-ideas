# Present Ideas

A privacy-focused web application that generates personalized gift suggestions based on chat conversations. Upload your WhatsApp or iMessage chat logs and get AI-powered gift recommendations while keeping your data private.

## Features

- **Privacy First**: All chat processing happens in the browser - your data never leaves your device
- **Smart Anonymization**: Automatically removes names and replaces them with "Person 1", "Person 2", etc.
- **AI-Powered Suggestions**: Uses OpenAI's GPT-4.1 nano model for cost-effective, high-quality gift suggestions
- **Token-Based Processing**: Intelligently chunks conversations by token count (800k tokens per chunk) for optimal processing
- **Cost Estimation**: Shows estimated API costs before processing
- **Modern UI**: Built with Next.js, TypeScript, and shadcn/ui components
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## How It Works

1. **Upload**: Drag and drop your chat export (.txt file, max 5MB) into the dropzone
2. **Preprocess**: The app processes your chat in the browser, extracting messages and anonymizing names for privacy
3. **Chunk**: Content is split into manageable chunks (500k characters) to avoid server limits
4. **Tokenize**: Backend intelligently chunks content by token count (800k tokens per chunk) for optimal processing
5. **Analyze**: Each chunk is analyzed by GPT-4.1 nano for cost-effective, high-quality gift suggestions
6. **Suggest**: Receive up to 20 personalized gift suggestions based on interests and preferences mentioned in your conversations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **UI Components**: shadcn/ui + Kibo UI
- **AI**: Vercel AI SDK with OpenAI GPT-4.1 nano
- **Tokenization**: gpt-tokenizer for accurate token counting and chunking
- **Styling**: Tailwind CSS
- **State Management**: React hooks with solid principles

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd present-ideas
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

The application follows solid principles and composability:

### Core Components

- **ChatDropzone**: Handles file upload and preprocessing
- **IdeasDisplay**: Shows generated gift suggestions
- **AppHeader**: Application branding and description

### Utilities

- **chat-processor.ts**: Handles chat parsing and anonymization (client-side)
- **ai.ts**: AI SDK configuration
- **actions.ts**: Server actions for tokenization and AI processing

### Processing Flow

1. **Client-side**: File upload, chat parsing, and name anonymization
2. **Server-side**: Token counting, content chunking, and AI analysis
3. **Client-side**: Display results and user interaction

### Key Features

- **Single Responsibility**: Each component and function has a single, well-defined purpose
- **Composability**: Components are designed to be reusable and composable
- **Privacy**: All sensitive processing happens client-side
- **Error Handling**: Comprehensive error handling throughout the application

## Usage

1. Export your chat from WhatsApp or iMessage as a .txt file
2. Upload the file using the dropzone
3. Wait for processing and AI analysis
4. Browse through personalized gift suggestions
5. Copy individual ideas or all suggestions to your clipboard

## Privacy

- Chat processing happens entirely in your browser
- Only anonymized content (with names removed) is sent to AI services
- No chat data is stored on servers
- All processing is done in real-time

## Contributing

This project follows solid programming principles:

- Single responsibility for all functions and components
- Clear, descriptive naming conventions
- No inline comments - write self-documenting code
- Functional TypeScript with proper typing
- Composability over inheritance

## License

MIT License - see LICENSE file for details.
