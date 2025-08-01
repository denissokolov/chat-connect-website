import { Container } from '@/components/Container'
import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col border-t border-gray-200 pt-8 pb-12 md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy;{' '}
            <Link href="https://github.com/denissokolov" className="hover:underline">
              Denis Sokolov
            </Link>{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}
