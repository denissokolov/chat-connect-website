import {
  FileLock2Icon,
  ShieldCheckIcon,
  InfoIcon,
  BrainIcon,
  SquarePenIcon,
  NotebookTextIcon,
} from 'lucide-react'

import { Container } from '@/components/Container'
import Link from 'next/link'

const features = [
  {
    name: 'Get page summary. Ask questions.',
    description: 'Get page summary with AI. Any page, any language, any topic.',
    icon: InfoIcon,
  },
  {
    name: 'Fill the forms',
    description:
      'Are you bored of filling forms? Ask AI to fill them for you. The extension understands the page context and gives you the chat interface.',
    icon: NotebookTextIcon,
  },
  {
    name: 'Write text',
    description: 'Use your favorite AI to write texts in Notion, GitGub, issue trackers, and more.',
    icon: SquarePenIcon,
  },
  {
    name: 'Variety of AI providers',
    description: 'Use any AI provider you want. We support OpenAI, Anthropic, and more to come.',
    icon: BrainIcon,
  },
  {
    name: 'Your data, your rules',
    description:
      "The extension save data only on your device, we don't store any data on our servers. Chat history feature could be disabled in the extension settings.",
    icon: FileLock2Icon,
  },
  {
    name: 'Transparency',
    description: (
      <>
        Use our proxy server with{' '}
        <Link
          href="https://github.com/denissokolov/chat-connect-server"
          className="underline hover:text-blue-500"
        >
          open source code
        </Link>{' '}
        or connect your own AI provider. We don&apos;t store any personal data on our servers.
      </>
    ),
    icon: ShieldCheckIcon,
  },
]

export function Features() {
  return (
    <section id="features" aria-label="Features for Chat Connect" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Your favorite AI assistant on every website
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map(feature => (
            <li key={feature.name} className="rounded-2xl border border-gray-200 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
