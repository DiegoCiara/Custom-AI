import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Qual o nível de sinistralidade na cidade de Caruaru?',
    message: `Qual o nível de sinistralidade na cidade de Caruaru?`
  },
  {
    heading: 'Como analisar de forma precisa a sinistralidade de uma base?',
    message: 'Como analisar de forma precisa a sinistralidade de uma base?'
  },
  {
    heading: 'Quais são os tipos de veículos com o nível mais alto de furto e roubo?',
    message: `Quais são os tipos de veículos com o nível mais alto de furto e roubo?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
         Bem vindo ao Chatbot de análise de Eventos!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
         Esta I.A. foi criada para análise de eventos e calculo de sinistralidade usando o modelo GPT da{' '}
          <ExternalLink href="https://openai.com">OpenAI</ExternalLink> e desenvolvido por {' '}
          <ExternalLink href="https://diegociara.com.br">Diego Ciara</ExternalLink>.
        </p>
        <p className="leading-normal text-muted-foreground">
          Você pode iniciar uma conversa usando algum dos exemplos abaixo:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
