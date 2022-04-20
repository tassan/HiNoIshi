import { createServer, Model } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export function makeServer() {
  return createServer({
    models: {
      category: Model
    },
  
    seeds(server) {
      server.db.loadData({
        categories: [
          {
            id: uuidv4(),
            title: 'ESCRITO EM FOGO',
            forums: [
              {
                id: uuidv4(),
                forumTitle: 'Anúncios',
                topicCount: 1,
                topics: [
                  {
                    id: uuidv4(),
                    topicTitle: 'Plot',
                    createdAt: new Date(),
                    startedBy: 'Admin',
                    pinned: true,
                    replies: [
                      {
                        id: 1,
                        message: `
                        ATUALIZAÇÃO DE PLOT
                        
                        Espaço para atualizações menores de plot conforme o decorrer do jogo!
                        Acompanhe dos capítulos resumidos conforme andamento de oficiais e eventos por aqui.`,
                        postedAt: new Date(),
                        topicFirstReply: true,
                      },
                      {
                        id: 2,
                        message: `
                        SHICHI FUKUJIN
                        
                        Era próximo do horário do almoço, perto das 13h, várias pessoas transitavam pelas ruas do vilarejo. Bares e restaurante enchiam de civis e shinobis para se alimentarem. A maioria desses estabelecimentos costuma sintonizar o rádio na estação mais popular de Konoha: Sora, uma rádio feita para o vilarejo que trata de assuntos exclusos do local, sem abordar pontos sensíveis ou de grande confidencialidade. Para esses que estavam sintonizados, possivelmente foram os primeiros a saber:
  
                        - [Hamada] (...) Mas os templos de fogo andam meio abandonados ultimamente. Talvez por conta dessas crenças mais populares.
  
                        - [Matsumoto] Você está falando dos seguidores dos 7 deuses, não está? Shichi Fukujin. Não acho que tradições seculares seriam tomadas assim do dia para noite, Hamada-san.
  
                        - [Hamada] Não estou dizendo isso! Até porque essa é uma crença antiga, na realidade. Ao menos em outros lugares. Mas o pessoal daqui só ficou sabendo por agora.
  
                        - [Matsumoto] Ah, é verdade. Eu já vi alguns seguidores nos últimos meses.
  
                        - [Hamada] Não me levem à mal, ok? Eu sou um cara aberto para todo tipo de crença, mas não acha que tem algo meio estranho? Eles literalmente rezam para sorte. Isso devia ser ilegal nos cassinos.
  
                        Os locutores continuaram a conversar sobre o tópico com pitadas de humor aqui e ali. Algumas pessoas se interessaram, fazendo com que os poucos livros sobre crença sumissem das prateleiras das livrarias do vilarejo, assim como da biblioteca de Konoha.
  
                        Você pode consultar as informações da nossa nova especialização, clicando aqui.`,
                        postedAt: new Date(),
                        topicFirstReply: false,
                      },
                    ]
                  }
                ]
              },
              {
                id: uuidv4(),
                forumTitle: 'Atendimento Ao Jogador',
                topicCount: uuidv4(),
                topics: [
                  {
                    id: uuidv4(),
                    topicTitle: 'Reset & Atualização',
                    createdAt: new Date(),
                    startedBy: 'Admin',
                    pinned: true,
                    replies: [
                      {
                        id: 1,
                        message: `
                        RESET
                        
                        Conforme explicado no Patch Note 2.0, esse tópico é dedicado ao reset de xp dos personagens que estão ativos no fórum. É de direito do jogador resgatar a xp da temporada que se passou (caso tenha algo pendente ainda não alocado na sua ficha), assim como o bônus recebido pelo Time Skip. Após solicitar o resgate, o jogador pode, no mesmo post, pedir o reset da xp investida na primeira temporada, usando os novos parâmetros de xp para conversão de atributos.
  
                          ATENÇÃO! É possível resetar todo o xp, porém a evolução gasta em traços, perícias e jutsus deve permanecer a mesma, sem mudanças. Apenas o xp investido em pontos poderá ser revisto pela nova regra de conversão;.
  
                          IMPORTANTE! O reset se trata de redistribuir pontos iniciais (DESCONTANDO CUSTOS DE CLÃS E ESPECIALIDADES NORMALMENTE), e então gastar sua XP de acordo com os novos custos.
                          
                          Para evitar que haja ABUSO do sistema de reset:
                          
                          JOUNIN que quiserem resetar completamente os atributos (Redistribuindo Pontos Iniciais antes de atualizar com XP) terão direito apenas a três atributos mínimos (2 PONTOS). O restante dos atributos terá de ser, no mínimo, 4 PONTOS.
                          
                          CHUUNIN possuirão uma limitação menor; terão direito a três atributos mínimos (1 PONTO), com o restante livre.
                          
                          IMPORTANTE²! Lembrem-se de que para manter suas fichas de personagens anteriores ao Time-Skip, este reset é obrigatório. E é permitido aos players que utilizem a XP resetada (Após as reduções) para comprar Jutsus, Perícias e Traços.
  
                          Siga o padrão abaixo para sua ficha ser atualizada, preenchendo o modelo. Fichas fora do padrão não serão atualizadas.`,
                        postedAt: new Date(),
                        topicFirstReply: true,
                      },
                    ]
                  },
                  {
                    id: uuidv4(),
                    topicTitle: 'Dúvidas e Sugestões',
                    createdAt: new Date(),
                    startedBy: 'Admin',
                    pinned: true,
                    replies: []
                  }
                ]
              },
              {
                id: uuidv4(),
                forumTitle: 'Prefácio',
                topicCount: 0,
                topics: []
              },
            ]
          }
        ]
      })
    },
  
    routes() {
      this.namespace = 'api';
  
      this.get('/categories', () => {
        return this.schema.all('category')
      })
    }
  })
}