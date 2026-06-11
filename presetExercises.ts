import { Exercise } from "~/types/workout";

export type PresetExercise = Omit<Exercise, "id"> & { category: string };

export const presetExercises: PresetExercise[] = [
  // PEITO
  {
    category: "Peito",
    name: "Supino Reto com Barra",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco plano com os pés firmes no chão. Segure a barra com pegada ligeiramente além da largura dos ombros.\n**EXECUÇÃO:** Desça a barra de forma controlada até o meio do peito. Empurre-a de volta estendendo os braços, mantendo uma leve flexão nos cotovelos no topo.\n**DICAS:** Mantenha as escápulas retraídas (unidas) contra o banco para proteger os ombros e maximizar a ativação do peitoral.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/barbell-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Supino Reto com Halteres",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione-se no banco plano com os pés bem apoiados. Segure um halter em cada mão na altura do peito.\n**EXECUÇÃO:** Empurre os halteres verticalmente até a extensão dos braços. Desça-os de forma controlada até sentir um leve alongamento no peito.\n**DICAS:** Diferente da barra, os halteres permitem uma maior amplitude. Evite bater os halteres no topo para manter a tensão.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Supino Inclinado com Barra",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste o banco para uma inclinação de 30° a 45°. Deite-se e segure a barra com pegada média-larga.\n**EXECUÇÃO:** Desça a barra de forma controlada até a parte superior do peitoral (próximo à clavícula). Empurre firmemente para cima.\n**DICAS:** Foca na porção superior do peito. Evite inclinação excessiva para não sobrecarregar os deltoides (ombros).",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-barra.gif",
  },
  {
    category: "Peito",
    name: "Supino Inclinado com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se no banco inclinado e segure os halteres na altura dos ombros com as palmas para frente.\n**EXECUÇÃO:** Empurre os halteres em um arco levemente convergente (aproximando-os no topo). Desça controladamente até sentir o alongamento.\n**DICAS:** Mantenha os cotovelos ligeiramente à frente da linha dos ombros para proteger a articulação gleno-umeral.",
    gifUrl:
      "https://static.wixstatic.com/media/2edbed_0519c5f6e5db4df08d392ae28784a177~mv2.gif",
  },
  {
    category: "Peito",
    name: "Supino Declinado com Barra",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco declinado e prenda firmemente os pés. Segure a barra com pegada média.\n**EXECUÇÃO:** Desça a barra até a parte inferior do peitoral (linha dos mamilos) e empurre-a de volta com total controle.\n**DICAS:** Enfatiza a porção inferior do peito. Recomenda-se o auxílio de um parceiro para retirar a barra do suporte com segurança.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/barbell-decline-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Supino Declinado com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco declinado segurando os halteres com as palmas voltadas para a frente.\n**EXECUÇÃO:** Empurre os halteres verticalmente e retorne à posição inicial de forma lenta, focando na contração do peitoral.\n**DICAS:** Oferece maior liberdade de movimento que a barra, reduzindo o estresse nos punhos e ombros.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-decline-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Máquina de Supino",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste o assento para que as manoplas fiquem alinhadas ao meio do peito. Sente-se com as costas bem apoiadas.\n**EXECUÇÃO:** Empurre as manoplas para frente até estender quase totalmente os braços. Retorne de forma lenta e controlada.\n**DICAS:** Ótimo para treinar até a falha com segurança. Foque em empurrar com o peito, não apenas com os braços.",
    gifUrl:
      "https://static.wixstatic.com/media/2edbed_a40ad39dfea64d1c97bb5357cca2a62d~mv2.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo na Máquina Peck‑Deck",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste o banco para que as manoplas fiquem na altura do peitoral médio. Sente-se e apoie bem as costas.\n**EXECUÇÃO:** Feche os braços em frente ao corpo, espremendo o peito no centro do movimento. Retorne controlando o peso.\n**DICAS:** Mantenha uma leve flexão nos cotovelos. Imagine que está abraçando um barril para focar no isolamento do peito.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo na Polia Alta",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste as polias na posição alta. Segure os pegadores e dê um passo à frente, mantendo o tronco levemente inclinado.\n**EXECUÇÃO:** Traga os braços para baixo e para o centro em um movimento de arco. Retorne devagar controlando a carga.\n**DICAS:** Foca na porção inferior do peitoral. Mantenha o core firme para evitar oscilações do tronco.",
    gifUrl:
      "https://i0.wp.com/meutreinador.com/wp-content/uploads/2024/04/Crossover-polia-alta.gif?fit=1080%2C1080&ssl=1",
  },
  {
    category: "Peito",
    name: "Crucifixo na Polia Baixa",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste as polias na posição mais baixa. Segure os pegadores e dê um passo à frente, inclinando levemente o corpo.\n**EXECUÇÃO:** Traga as mãos de baixo para cima e para o centro, terminando na altura do queixo. Sinta a contração no topo.\n**DICAS:** Alvo principal é a porção superior (clavicular) do peitoral. Evite usar o impulso das pernas.",
    gifUrl:
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Crossover-na-Polia-Baixa.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo no Nível Médio",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste as polias na altura dos ombros. Segure os pegadores e mantenha os braços ligeiramente flexionados.\n**EXECUÇÃO:** Junte as mãos à frente do peito, mantendo a altura constante das polias. Retorne até os braços alinharem ao corpo.\n**DICAS:** Mantém a tensão constante no peitoral médio. Controle bem a fase de retorno (excêntrica).",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/08/cable-middle-fly.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo Unilateral na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure um pegador da polia (altura média). Fique de lado para o aparelho e dê um passo lateral.\n**EXECUÇÃO:** Traga a mão em direção ao centro do corpo, ultrapassando levemente a linha média. Retorne controladamente.\n**DICAS:** Excelente para corrigir assimetrias e focar na contração interna do peitoral de forma isolada.",
    gifUrl: "https://www.ferrosports.com.br/img_external/ombro/image10.gif",
  },
  {
    category: "Peito",
    name: "Flexão de Braço",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie as mãos no chão com distância superior à largura dos ombros. Mantenha o corpo alinhado (posição de prancha).\n**EXECUÇÃO:** Desça o corpo até o peito quase tocar o chão. Empurre de volta à posição inicial com força.\n**DICAS:** Mantenha o abdômen e glúteos contraídos. Se necessário, apoie os joelhos no chão para facilitar.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif",
  },
  {
    category: "Peito",
    name: "Flexão Diamante",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione as mãos no chão próximas uma da outra, formando um diamante com os dedos indicadores e polegares.\n**EXECUÇÃO:** Desça o peito em direção às mãos e suba estendendo totalmente os braços.\n**DICAS:** Exige mais dos tríceps e da porção interna do peitoral. Mantenha os cotovelos próximos ao tronco.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2023/11/corpo-texto-flexao-de-bracos-diamante.gif",
  },
  {
    category: "Peito",
    name: "Flexão com Pegada Larga",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione as mãos no solo com uma distância bem superior à largura dos ombros.\n**EXECUÇÃO:** Desça o tronco mantendo os cotovelos apontados para fora e suba de forma controlada.\n**DICAS:** A pegada larga coloca maior ênfase na porção externa do peitoral e reduz a participação do tríceps.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/wide-hand-push-up.gif",
  },
  {
    category: "Peito",
    name: "Flexão com Pés Elevados",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Coloque os pés sobre um banco ou elevação estável e as mãos no chão à frente.\n**EXECUÇÃO:** Realize a flexão descendo o peito em direção ao solo, mantendo o alinhamento do corpo.\n**DICAS:** Transfere mais carga para a porção superior do peito e deltoides. É mais desafiador que a flexão comum.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2019/12/decline-pushup.gif",
  },
  {
    category: "Peito",
    name: "Mergulho nas Paralelas",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure nas barras paralelas com os braços estendidos. Incline o tronco ligeiramente para frente.\n**EXECUÇÃO:** Desça flexionando os cotovelos até sentir um alongamento no peito. Empurre para cima com força até a posição inicial.\n**DICAS:** A inclinação frontal é crucial para focar no peitoral inferior. Se o tronco ficar reto, o foco mudará para o tríceps.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/paralelas.gif",
  },
  {
    category: "Peito",
    name: "Supino 'Svend' (Pinçamento)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé ou sentado. Segure uma anilha ou halter entre as palmas das mãos, pressionando-as uma contra a outra na frente do peito.\n**EXECUÇÃO:** Estenda os braços para frente mantendo a pressão constante entre as mãos. Retorne trazendo o peso ao peito.\n**DICAS:** O segredo é a tensão isométrica lateral. Você deve sentir o peitoral contraído durante todo o percurso.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/07/supino-inclinado-fechado1.gif",
  },
  {
    category: "Peito",
    name: "Supino Unilateral com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco segurando um halter em apenas uma das mãos.\n**EXECUÇÃO:** Realize o movimento de supino, mantendo a estabilidade do tronco contra o banco. Alterne os braços.\n**DICAS:** Como a carga é unilateral, seu core trabalhará intensamente para evitar a rotação do tronco. Ótimo para estabilidade articular.",
    gifUrl:
      "https://i.pinimg.com/originals/c3/ac/8f/c3ac8f4c1763262c1f3ac1ef3ea741ff.gif",
  },
  {
    category: "Peito",
    name: "Pull‑Over com Halteres",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco (apoiando apenas as costas ou todo o corpo). Segure um halter com as duas mãos acima do peito.\n**EXECUÇÃO:** Com os braços ligeiramente flexionados, desça o peso atrás da cabeça em um arco amplo. Puxe-o de volta à posição inicial.\n**DICAS:** Trabalha peito e dorsais. Mantenha o quadril estável e sinta o alongamento da caixa torácica na descida.",
    gifUrl:
      "https://static.wixstatic.com/media/2edbed_38cca09bfbbd4177b2a39bc3d93e82d3~mv2.gif",
  },
  {
    category: "Peito",
    name: "Supino Declinado na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione o banco declinado entre duas polias baixas. Segure os pegadores mantendo os braços abertos.\n**EXECUÇÃO:** Empurre os pegadores para cima e para o centro, aproveitando a tensão constante do cabo.\n**DICAS:** Diferente dos pesos livres, o cabo mantém o peito sob tensão em todos os pontos do movimento.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/cable-decline-press.gif",
  },
  {
    category: "Peito",
    name: "Supino Inclinado na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione o banco inclinado entre duas polias baixas. Segure os pegadores.\n**EXECUÇÃO:** Realize o movimento de supino empurrando os cabos para cima e para o centro.\n**DICAS:** Foca na porção superior do peitoral com a vantagem da tensão mecânica contínua oferecida pelos cabos.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/07/cable-incline-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Flexão Explosiva",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição padrão de flexão com o corpo reto.\n**EXECUÇÃO:** Desça controladamente e empurre o chão com explosão, de modo que as mãos percam o contato com o solo no topo.\n**DICAS:** Exercício focado em potência muscular. Amorteça a descida suavemente para proteger as articulações dos punhos e cotovelos.",
    gifUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibxVAo26SfCIZjt_o6BTWm3TFD_qgQUtsgQ5hJcy3tsysstzRYRpMbxhYQVLZIR0xW4T46tfqU3gFyoJX1q7E64zfUMsNsrA_FZqnJ9IdVvAZq_hMkbqlg4kGNfkPsxYXWHgRaOxFYK9tJ/s1080/explosivepushup-1457102261.gif",
  },
  {
    category: "Peito",
    name: "Flexão com Palmas",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de flexão explosiva.\n**EXECUÇÃO:** Desça o tronco e empurre o solo com potência suficiente para bater palmas no ar antes de retornar ao chão.\n**DICAS:** Nível avançado de pliometria. Mantenha o core extremamente firme para absorver o impacto com segurança.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2019/12/clap-push-up.gif",
  },
  {
    category: "Peito",
    name: "Flexão 'Arqueiro'",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Mãos bem afastadas no chão. Imagine a posição de um arqueiro ao puxar a corda do arco.\n**EXECUÇÃO:** Desça o corpo sobre uma das mãos, mantendo o outro braço estendido para o lado. Alterne os lados.\n**DICAS:** Excelente progressão para a flexão unilateral. Transfere a maior parte da carga para um lado por vez.",
    gifUrl:
      "https://brand.assets.adidas.com/capi/ptBR/Images/10-flexion-arquero_194-1072579.gif",
  },
  {
    category: "Peito",
    name: "Supino Spoto",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicionamento de supino reto padrão.\n**EXECUÇÃO:** Desça a barra e pare-a cerca de 3 a 5 cm acima do peito por 1 segundo (pausa isométrica). Empurre explosivamente para cima.\n**DICAS:** Elimina o auxílio da inércia e treina a arrancada no ponto de maior desvantagem mecânica.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/barbell-lying-closegrip-press.gif",
  },
  {
    category: "Peito",
    name: "Supino com Pausa",
    sets: 4,
    reps: 5,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicionamento de supino padrão.\n**EXECUÇÃO:** Realize a descida e, no ponto de maior alongamento, mantenha a barra imóvel por 2 a 3 segundos antes de subir.\n**DICAS:** Desenvolve controle muscular absoluto e força isométrica sob carga máxima.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/smith-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Supino no Chão",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no chão (pode usar um colchonete). Joelhos dobrados e pés apoiados no solo.\n**EXECUÇÃO:** Desça a barra até que os tríceps toquem levemente o chão e empurre de volta à extensão total.\n**DICAS:** A amplitude reduzida protege os ombros e permite focar na força de finalização (lockout) do movimento.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/supino-chao-com-halteres.gif",
  },
  {
    category: "Peito",
    name: "Supino com Pegada Invertida",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra com pegada supinada (palmas voltadas para o rosto) na largura dos ombros.\n**EXECUÇÃO:** Desça a barra em direção à porção inferior do peito e empurre-a de volta.\n**DICAS:** Isola intensamente a porção superior do peito e os tríceps. Exige cuidado redobrado com a estabilidade e punhos.",
    gifUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLnoCWhSCQ777aKn-veiudmne8NSksxNTzrHrSELx7x6Pt_mKjk1n5wPPLNfmrEP54DnVZ665Csy1BVY1aDqTyYJHU15Yw6UJShWn-Ob_DPyO95Bdhp7wthLiRHoZSd7apKa7lVFhqem55/s1600/Supino-pegada-Invertida-exercicio.jpg",
  },
  {
    category: "Peito",
    name: "Supino Inclinado com Pegada Invertida",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** No banco inclinado, utilize a pegada supinada (palmas para o rosto).\n**EXECUÇÃO:** Realize o movimento de supino focando na contração da porção superior (clavicular) do peitoral.\n**DICAS:** Variação avançada que atinge fibras específicas do peito superior. Use cargas moderadas para garantir o controle.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/07/barbell-reverse-grip-incline-bench-press.gif",
  },
  {
    category: "Peito",
    name: "Supino Pinçado",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure os halteres de modo que eles fiquem pressionados um contra o outro acima do peito.\n**EXECUÇÃO:** Empurre-os mantendo a pressão lateral constante entre os halteres durante todo o percurso.\n**DICAS:** Foca no 'miolo' do peitoral. A tensão isométrica lateral é o segredo para o estímulo deste exercício.",
    gifUrl: "https://i.ibb.co/KjtQxSp4/crie-uma-imagem-da-e.png",
  },
  {
    category: "Peito",
    name: "Supino Isolateral",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Utilize uma máquina de supino articulada que permita o movimento independente de cada braço.\n**EXECUÇÃO:** Empurre os braços de forma alternada ou simultânea, mantendo o controle individual de cada lado.\n**DICAS:** Essencial para corrigir desequilíbrios de força e garantir um desenvolvimento estético simétrico.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/07/dumbbell-incline-one-arm-press.gif",
  },
  {
    category: "Peito",
    name: "Supino no Chão com Halteres",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no chão segurando os halteres com as palmas para frente.\n**EXECUÇÃO:** Desça até que os cotovelos toquem levemente o solo e empurre os halteres para a extensão total.\n**DICAS:** Reduz o estresse na articulação do ombro devido à amplitude limitada, sendo ideal para quem possui sensibilidade articular.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/supino-chao-com-halteres.gif",
  },
  {
    category: "Peito",
    name: "Máquina Hammer Strength de Supino",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste o banco para alinhar as pegadas com a linha média do peito. Mantenha o peito aberto.\n**EXECUÇÃO:** Empurre as manoplas sentindo o movimento convergente (ligeiramente para dentro no final).\n**DICAS:** Permite o uso de cargas elevadas com segurança biomecânica, respeitando o arco natural de movimento dos braços.",
    gifUrl:
      "https://i.pinimg.com/474x/6e/e1/01/6ee101e24796bcf66aa83079eaae2a59.jpg",
  },
  {
    category: "Peito",
    name: "Crucifixo com Halteres no Banco Plano",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco plano. Segure os halteres acima do peito com braços ligeiramente flexionados.\n**EXECUÇÃO:** Abra os braços lateralmente em um arco amplo até sentir o alongamento. Retorne como se estivesse abraçando uma árvore.\n**DICAS:** Exercício de isolamento puro. Não dobre excessivamente os cotovelos para não transformar o movimento em um supino.",
    gifUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREx0EFsCdCudTBJ5VipDVMUifojiD2rnvWw&s",
  },
  {
    category: "Peito",
    name: "Crucifixo Inclinado com Halteres",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Banco inclinado (30° a 45°). Inicie com os halteres acima da linha do rosto.\n**EXECUÇÃO:** Abra os halteres lateralmente e retorne aproximando-os sobre a porção superior do peito.\n**DICAS:** Enfatiza o alongamento e contração da porção clavicular do peitoral. Mantenha movimentos lentos e controlados.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-incline-fly.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo Declinado com Halteres",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Banco declinado. Posicione os halteres acima da porção inferior do peito.\n**EXECUÇÃO:** Realize a abertura lateral em arco e retorne ao centro de forma controlada.\n**DICAS:** Foca no alongamento da porção inferior e externa do peitoral. Ideal para desenhar a linha inferior do músculo.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/07/dumbbell-decline-fly.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo Unilateral no Chão",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no chão. Inicie com um halter acima do peito em um dos braços.\n**EXECUÇÃO:** Abra o braço lateralmente até o cotovelo tocar levemente o solo. Retorne à posição inicial.\n**DICAS:** O solo atua como limitador de segurança, prevenindo a hiperextensão do ombro. Excelente para estabilidade unilateral.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/10/dumbbell-one-arm-bench-fly.gif",
  },
  {
    category: "Peito",
    name: "Crucifixo com Banda Elástica",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Prenda a banda elástica atrás das costas (ou em um poste firme) e segure as extremidades.\n**EXECUÇÃO:** Realize o movimento de crucifixo juntando as mãos à frente do corpo contra a resistência do elástico.\n**DICAS:** A resistência é progressiva; quanto mais você fecha os braços, maior a carga, gerando um pico de contração intenso.",
    gifUrl: "https://i.ibb.co/Kx8ZRcrb/Crucifixo-com-Banda.png",
  },
  {
    category: "Peito",
    name: "Flexão com Banda",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Passe a banda elástica pelas costas e segure as pontas sob as mãos ao apoiar no chão.\n**EXECUÇÃO:** Realize a flexão normalmente. O elástico aumentará drasticamente a dificuldade na fase de subida.\n**DICAS:** Excelente maneira de adicionar carga ao peso corporal de forma prática para ganho de força e potência.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/gif-pushup.gif",
  },

  // PERNAS
  {
    category: "Pernas",
    name: "Agachamento Livre",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione a barra sobre o trapézio (não sobre o pescoço). Pés afastados na largura dos ombros e peito aberto.\n**EXECUÇÃO:** Agache projetando o quadril para trás até as coxas ficarem paralelas ao chão. Suba empurrando pelos calcanhares.\n**DICAS:** Mantenha o core firme e o olhar no horizonte. Não deixe os joelhos 'caírem' para dentro (valgo dinâmico).",
    gifUrl:
      "https://media.tenor.com/Re3T3B66V9UAAAAM/barbellsquats-gymexercisesmen.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Frontal",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie a barra na porção anterior dos ombros e clavículas (pegada cruzada ou clean). Cotovelos altos.\n**EXECUÇÃO:** Mantenha o tronco o mais vertical possível e agache profundamente. Retorne mantendo os cotovelos elevados.\n**DICAS:** Esta variação prioriza o quadríceps e exige maior estabilidade da porção superior das costas.",
    gifUrl:
      "https://static.wixstatic.com/media/2edbed_0225782b720d4b2db755899fea745dc2~mv2.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Sumô",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pés bem afastados (além da largura dos ombros) e pontas dos pés viradas para fora (~45°).\n**EXECUÇÃO:** Segure o peso entre as pernas e agache mantendo os joelhos alinhados com a direção dos pés.\n**DICAS:** Excelente para enfatizar os adutores (parte interna da coxa) e glúteos. Mantenha o tronco ereto.",
    gifUrl:
      "https://static.wixstatic.com/media/2edbed_b10792904cad42cda04ecba536dc2139~mv2.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Búlgaro",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie um pé atrás em um banco ou elevação e o outro à frente no solo.\n**EXECUÇÃO:** Desça o quadril verticalmente até o joelho de trás quase tocar o chão. Suba focando na força da perna da frente.\n**DICAS:** Um dos melhores exercícios para glúteos e quadríceps. Mantenha o tronco ligeiramente inclinado para frente para maior ativação do glúteo.",
    gifUrl: "https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/agachamento-bulgaro.gif",
  },
  {
    category: "Pernas",
    name: "Afundo (Lunge)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé, pés na largura do quadril. Dê um passo largo para frente.\n**EXECUÇÃO:** Flexione ambos os joelhos até formarem ângulos de 90°. O joelho de trás desce em direção ao solo. Empurre de volta.\n**DICAS:** Mantenha o equilíbrio focando em um ponto fixo. Evite que o joelho da frente ultrapasse excessivamente a ponta do pé.",
    gifUrl: "https://burnfit.io/wp-content/uploads/2023/11/DB_LUNGE.gif",
  },
  {
    category: "Pernas",
    name: "Afundo Reverso",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição ereta. Dê um passo largo para trás.\n**EXECUÇÃO:** Desça o joelho de trás em direção ao solo até formar um ângulo de 90° em ambas as pernas. Retorne à posição inicial.\n**DICAS:** Geralmente mais confortável para os joelhos que o afundo frontal, facilitando a manutenção da verticalidade do tronco.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2021/12/barbell-rear-lunge-v-2.gif",
  },
  {
    category: "Pernas",
    name: "Afundo Lateral",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pés paralelos. Dê um passo largo para o lado.\n**EXECUÇÃO:** Mantenha uma perna estendida enquanto flexiona o joelho da perna que deu o passo, projetando o quadril para trás. Retorne ao centro.\n**DICAS:** Foca nos adutores e glúteo médio. Mantenha o pé da perna esticada totalmente apoiado no chão.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-agachamento-lateral-lunges-com-pesos-1.gif",
  },
  {
    category: "Pernas",
    name: "Leg Press",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se no aparelho e apoie os pés na plataforma na largura dos ombros. Mantenha a lombar colada no encosto.\n**EXECUÇÃO:** Empurre a plataforma até quase estender as pernas (sem travar os joelhos). Retorne controladamente.\n**DICAS:** Evite tirar o quadril do banco no final da descida para proteger a coluna lombar.",
    gifUrl: "https://burnfit.io/wp-content/uploads/2023/11/LEG_PRESS.gif",
  },
  {
    category: "Pernas",
    name: "Leg Press Unilateral",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie apenas um pé na plataforma do Leg Press, alinhado ao ombro. O outro pé fica no solo ou suporte.\n**EXECUÇÃO:** Empurre a plataforma e retorne controladamente usando apenas a força de uma perna.\n**DICAS:** Excelente para identificar e corrigir assimetrias de força e volume entre os membros inferiores.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/leg-press-45-unilateral.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Hack",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione-se na máquina com as costas apoiadas e ombros sob as almofadas. Pés na largura dos ombros.\n**EXECUÇÃO:** Agache até as coxas estarem paralelas à plataforma. Empurre de volta com força.\n**DICAS:** A máquina estabiliza o tronco, permitindo um foco intenso nos quadríceps. Não trave os joelhos no topo.",
    gifUrl: "https://burnfit.io/wp-content/uploads/2023/11/HACK_SQT.gif",
  },
  {
    category: "Pernas",
    name: "Stiff (Peso Morto Romeno)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra ou halteres à frente das coxas. Mantenha os joelhos ligeiramente flexionados e fixos.\n**EXECUÇÃO:** Desça a carga rente às pernas, empurrando o quadril para trás até sentir o alongamento dos posteriores. Suba contraindo os glúteos.\n**DICAS:** Mantenha as costas retas em todo o percurso. O movimento é uma 'dobradiça' de quadril, não de coluna.",
    gifUrl: "https://media.tenor.com/kyOyzUcfIpMAAAAM/dumbbell-romanian.gif",
  },
  {
    category: "Pernas",
    name: "Peso Morto Convencional",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Barra no chão sobre o meio dos pés. Agache mantendo as costas retas e segure a barra.\n**EXECUÇÃO:** Suba com a barra rente às pernas, estendendo joelhos e quadril simultaneamente. Termine em posição ereta.\n**DICAS:** Exercício composto fundamental. Mantenha o core firme e não permita que a coluna lombar arredonde (cifose).",
    gifUrl:
      "https://i.pinimg.com/originals/07/48/5c/07485c73c14b3d6b8aabf9b049e287c4.gif",
  },
  {
    category: "Pernas",
    name: "Peso Morto Sumo",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pés bem afastados com pontas para fora. Segure a barra por dentro das pernas.\n**EXECUÇÃO:** Levante a barra mantendo o peito alto e os joelhos apontados para fora, alinhados aos pés.\n**DICAS:** Exige mais dos adutores e permite manter o tronco mais vertical do que a versão convencional.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/barbell-sumo-deadlift.gif",
  },
  {
    category: "Pernas",
    name: "Ponte de Glúteos",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de costas, joelhos dobrados e pés próximos aos glúteos. Braços ao lado do corpo.\n**EXECUÇÃO:** Eleve o quadril em direção ao teto, contraindo forte os glúteos no topo por 1 segundo. Retorne devagar.\n**DICAS:** Pode ser realizado com barra ou halteres sobre o quadril para aumentar a intensidade.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/ponte-para-gluteos-1.gif",
  },
  {
    category: "Pernas",
    name: "Elevação de Quadril Single-Leg",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Mesma posição da ponte comum, mas com uma perna estendida para cima.\n**EXECUÇÃO:** Eleve o quadril usando apenas a força da perna que está apoiada no solo.\n**DICAS:** Excelente para corrigir desequilíbrios entre os glúteos e melhorar a estabilidade pélvica.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/ponte-com-uma-perna-elevada-e-reta.gif",
  },
  {
    category: "Pernas",
    name: "Subida em Banco",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione-se em frente a um banco ou degrau estável.\n**EXECUÇÃO:** Coloque um pé totalmente apoiado no banco e suba usando apenas a força dessa perna. Desça de forma controlada.\n**DICAS:** Não use o 'impulso' da perna que ficou no chão. Mantenha o tronco ereto e foque na perna de cima.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/stepup-alto-no-banco-com-halteres.gif",
  },
  {
    category: "Pernas",
    name: "Elevação de Panturrilha em Pé",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé sobre um degrau (apoiando apenas a ponta dos pés) ou no chão.\n**EXECUÇÃO:** Eleve o corpo ficando na ponta dos pés o máximo possível. Desça o calcanhar abaixo da linha do degrau para maior alongamento.\n**DICAS:** Mantenha os joelhos estendidos. Faça o movimento de forma lenta para evitar o uso da elasticidade do tendão.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/elevacao-de-panturrilhas-com-o-peso-do-corpo.gif",
  },
  {
    category: "Pernas",
    name: "Elevação de Panturrilha Sentado",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na máquina específica e ajuste o suporte sobre as coxas (próximo aos joelhos).\n**EXECUÇÃO:** Eleve o peso usando as pontas dos pés e retorne controladamente sentindo o alongamento.\n**DICAS:** Com os joelhos flexionados, o foco recai sobre o músculo sóleo. Evite rebater o peso.",
    gifUrl:
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/sentado.gif",
  },
  {
    category: "Pernas",
    name: "Mesa Flexora",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se na máquina e ajuste o rolo acolchoado logo acima dos calcanhares.\n**EXECUÇÃO:** Flexione os joelhos trazendo os calcanhares em direção aos glúteos. Retorne de forma lenta e controlada.\n**DICAS:** Mantenha o quadril colado no banco durante todo o movimento para evitar a compensação da coluna lombar.",
    gifUrl: "https://media.tenor.com/fj_cZPprAyMAAAAM/gym.gif",
  },
  {
    category: "Pernas",
    name: "Cadeira Extensora",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na máquina e ajuste o rolo sobre a parte inferior das canelas.\n**EXECUÇÃO:** Estenda as pernas totalmente e contraia os quadríceps no topo por 1 segundo. Retorne controladamente.\n**DICAS:** Ajuste o banco para que a articulação do joelho fique alinhada ao eixo de rotação da máquina.",
    gifUrl: "https://media.tenor.com/bqKtsSuqilQAAAAM/gym.gif",
  },
  {
    category: "Pernas",
    name: "Cadeira Abdutora",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na máquina e ajuste as almofadas na lateral externa dos joelhos.\n**EXECUÇÃO:** Afaste as pernas contra a resistência e retorne lentamente sem deixar os pesos tocarem.\n**DICAS:** Manter o tronco ligeiramente inclinado para frente pode aumentar a ativação do glúteo médio e piriforme.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/lever-seated-hip-abduction.gif",
  },
  {
    category: "Pernas",
    name: "Cadeira Adutora",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste as almofadas na parte interna dos joelhos e sente-se com a postura ereta.\n**EXECUÇÃO:** Feche as pernas com força, apertando no centro, e retorne controlando o peso.\n**DICAS:** Foca nos adutores da coxa. Evite usar o impulso e mantenha o movimento constante e fluido.",
    gifUrl:
      "https://i.pinimg.com/originals/6f/e3/fd/6fe3fdb4b0fbd8379229a659f099fae0.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Isométrico (Wall Sit)",
    sets: 3,
    reps: 60,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Encoste as costas na parede e agache até as coxas ficarem paralelas ao chão (90°).\n**EXECUÇÃO:** Mantenha a posição estática respirando de forma controlada pelo tempo determinado.\n**DICAS:** Mantenha os braços ao lado do corpo ou cruzados; nunca apoie as mãos nas coxas para 'ajudar'.",
    gifUrl:
      "https://media.tenor.com/0yzgIpfOsEYAAAAC/agachamento-isom%C3%A9trico-treino-mestre.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento com Salto",
    sets: 3,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de agachamento padrão com pés na largura dos ombros.\n**EXECUÇÃO:** Agache e salte explosivamente para cima. Amorteça a queda agachando suavemente para absorver o impacto.\n**DICAS:** Exercício de alta intensidade e potência. Foco na aterrissagem silenciosa e controlada.",
    gifUrl:
      "https://preview.redd.it/dumbbell-jump-squats-v0-qjwnx110h62e1.gif?width=360&auto=webp&s=d3a9d8ef98b02051af1906c38a47cd112a0485a2",
  },
  {
    category: "Pernas",
    name: "Agachamento com Salto em Caixa",
    sets: 3,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em frente a uma caixa firme ou plataforma estável.\n**EXECUÇÃO:** Salte sobre a caixa, pousando suavemente com os dois pés. Desça um pé de cada vez com segurança.\n**DICAS:** Amorteça a queda no topo da caixa; o pouso deve ser o mais silencioso possível.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/box-jump.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Pistola",
    sets: 3,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em uma perna, com a outra perna estendida à frente (sem tocar o chão).\n**EXECUÇÃO:** Agache de forma controlada o máximo possível e retorne à posição inicial.\n**DICAS:** Exercício de elite para força e equilíbrio. Use um suporte lateral (TRX ou poste) para progredir se necessário.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/single-leg-squat-pistol-male.gif",
  },
  {
    category: "Pernas",
    name: "Shrimp Squat",
    sets: 3,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Similar ao agachamento pistola, mas a perna livre fica flexionada para trás.\n**EXECUÇÃO:** Agache até o joelho da perna livre tocar levemente o solo atrás de você e suba.\n**DICAS:** Exige grande coordenação e força unilateral. Mantenha o tronco levemente inclinado à frente para estabilidade.",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/shrimp-squats.gif",
  },
  {
    category: "Pernas",
    name: "Agachamento Sissy",
    sets: 3,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé, segure em um suporte lateral firme. Fique na ponta dos pés.\n**EXECUÇÃO:** Projete os joelhos para frente enquanto inclina o tronco para trás, descendo o corpo em linha reta.\n**DICAS:** Foco extremo no isolamento do quadríceps. Cuidado com o estresse articular nos joelhos; faça de forma controlada.",
    gifUrl:
      "https://cdn.shopify.com/s/files/1/0665/5711/6681/files/bodyweight-sissy-squat_1024x1024.gif?v=1704396666",
  },
  {
    category: "Pernas",
    name: "Cossack Squat",
    sets: 3,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de pés bem ampla. Transfira o peso para um dos lados.\n**EXECUÇÃO:** Agache profundamente sobre uma perna enquanto a outra permanece estendida com o calcanhar apoiado.\n**DICAS:** Excelente para mobilidade de quadril e força lateral. Mantenha o calcanhar da perna que agacha sempre no solo.",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2024/09/dumbbell-cossack-squat.gif",
  },
  {
    category: "Pernas",
    name: "Swing com Kettlebell",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pés afastados. Kettlebell posicionado à frente no solo.\n**EXECUÇÃO:** Balance o peso entre as pernas e use o impulso explosivo do quadril para elevá-lo até a altura dos ombros.\n**DICAS:** O movimento é gerado pelo quadril (hip hinge), não pelos braços. Mantenha as costas neutras.",
    gifUrl: "https://burnfit.io/wp-content/uploads/2023/11/KB_SWING.gif",
  },
  {
    category: "Pernas",
    name: "Kickstand Deadlift",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em uma perna. A outra perna fica ligeiramente atrás, apoiada apenas pela ponta do pé para equilíbrio.\n**EXECUÇÃO:** Realize o movimento de Stiff (quadril para trás) focando quase 100% na perna da frente.\n**DICAS:** Excelente transição para o levantamento terra unilateral completo.",
    gifUrl: "https://gymvisual.com/img/p/1/6/9/4/7/16947.gif",
  },
  {
    category: "Pernas",
    name: "Deadlift Unilateral",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em uma perna. Segure um halter com a mão oposta à perna de apoio para maior equilíbrio.\n**EXECUÇÃO:** Desça o tronco enquanto a perna livre sobe para trás, mantendo o alinhamento. Retorne de forma controlada.\n**DICAS:** Mantenha o quadril nivelado (olhando para o chão). Foco na contração do posterior e estabilidade do tornozelo.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/dumbbell-single-leg-deadlift.gif",
  },
  {
    category: "Pernas",
    name: "Afundo com Salto no Lugar",
    sets: 3,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de afundo com pés escalonados.\n**EXECUÇÃO:** Salte explosivamente e troque a posição das pernas no ar (tesoura), pousando suavemente em um novo afundo.\n**DICAS:** Exercício de alta demanda cardiovascular e potência. Mantenha o tronco ereto e os braços coordenados.",
    gifUrl: "https://gymvisual.com/img/p/1/4/7/3/4/14734.gif",
  },
  {
    category: "Pernas",
    name: "Marcha Joelhos Altos",
    sets: 3,
    reps: 60,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé com os braços ao lado do corpo.\n**EXECUÇÃO:** Marche no lugar trazendo os joelhos o mais alto possível de forma rítmica.\n**DICAS:** Mantenha o abdômen contraído e use o movimento dos braços para aumentar a frequência e a intensidade.",
    gifUrl: "https://i.makeagif.com/media/4-06-2020/TZsocV.gif",
  },
  {
    category: "Pernas",
    name: "Cadeira Flexora em Pé Unilateral",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé na máquina flexora, apoiando o tronco no suporte.\n**EXECUÇÃO:** Flexione uma perna de cada vez, levando o calcanhar em direção ao glúteo. Retorne devagar.\n**DICAS:** Permite o isolamento total de cada membro posterior, ajudando a corrigir assimetrias musculares.",
    gifUrl:
      "https://media.tenor.com/oWFSihhh8JgAAAAC/leg-curl-machine.gif",
  },
  {
    category: "Pernas",
    name: "Glute Bridge com Banda",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas com uma mini-band posicionada logo acima dos joelhos. Pés próximos aos glúteos.\n**EXECUÇÃO:** Eleve o quadril enquanto faz força para manter os joelhos afastados contra a resistência da banda.\n**DICAS:** Aumenta significativamente a ativação do glúteo médio e estabilizadores do quadril.",
    gifUrl: "https://i.pinimg.com/originals/d1/90/42/d19042fd33e8e9707d4b8340aaddf61b.gif",
  },
  {
    category: "Pernas",
    name: "Elevação Lateral de Pernas em Pé",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé, segure em um suporte para equilíbrio se necessário.\n**EXECUÇÃO:** Afaste uma das pernas lateralmente o máximo possível sem inclinar o tronco. Retorne controladamente.\n**DICAS:** Foco no glúteo médio. Mantenha a ponta do pé apontada para frente, não para cima.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/abducao-de-pernas-na-maquina-com-cabos.gif",
  },
  {
    category: "Pernas",
    name: "Abdução de Quadril com Banda",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de lado no solo com uma mini-band logo acima dos joelhos.\n**EXECUÇÃO:** Eleve a perna de cima lateralmente mantendo o joelho estendido. Retorne de forma controlada.\n**DICAS:** Foco no glúteo médio. Não permita que o quadril gire para trás durante a elevação.",
    gifUrl:
      "https://i.pinimg.com/originals/5c/86/1b/5c861b3b7feb6be6776d8a3aa7a536bd.gif",
  },

  // COSTAS
  {
    category: "Costas",
    name: "Puxada Aberta na Polia Alta",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se no pulley, ajuste o suporte de coxas e segure a barra com pegada aberta (pronada).\n**EXECUÇÃO:** Puxe a barra em direção à parte superior do peito, mantendo o tronco levemente inclinado para trás. Retorne controladamente.\n**DICAS:** Pense em puxar com os cotovelos, não com as mãos. Evite puxar por trás da nuca para proteger os ombros.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-aberta-na-polia-alta.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Puxada Fechada Supinada na Polia",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Utilize uma barra reta ou curva. Segure com as palmas voltadas para o rosto (supinação) na largura dos ombros.\n**EXECUÇÃO:** Puxe a barra até o peito, mantendo os cotovelos próximos ao corpo. Estenda totalmente os braços na fase de retorno.\n**DICAS:** Esta pegada recruta intensamente o bíceps e a porção inferior das dorsais. Mantenha a postura ereta.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-fechada-supinada-na-polia.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Puxada Neutra (pegada em triângulo)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Utilize o pegador em triângulo. Sente-se e estabilize as pernas no suporte.\n**EXECUÇÃO:** Puxe o triângulo até a parte inferior do peito, aproximando as escápulas ao final do movimento. Retorne controladamente.\n**DICAS:** A pegada neutra é mais anatômica para punhos e ombros. Foco no desenvolvimento da espessura das costas.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-neutra-pegada-em-triangulo.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Barra Fixa Pronada",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra fixa com as palmas para frente (pronada) e mãos além da largura dos ombros.\n**EXECUÇÃO:** Puxe o corpo para cima até o queixo ultrapassar a barra. Desça controlando o peso do corpo até a extensão total.\n**DICAS:** Exercício fundamental de peso corporal. Se necessário, utilize bandas elásticas ou a máquina Graviton para assistência.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-barra-fixa-pronada.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Barra Fixa Supinada",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra com as palmas para o rosto (supinada), mãos na largura dos ombros.\n**EXECUÇÃO:** Eleve o corpo até o queixo passar da linha da barra. Sinta a forte ativação de bíceps e dorsais.\n**DICAS:** Excelente para construir força base de puxada e melhorar o volume do bíceps braquial.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-barra-fixa-supinada.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Barra Fixa Neutra",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure na barra com pegada neutra (palmas viradas uma para a outra).\n**EXECUÇÃO:** Puxe o corpo para cima focando na contração das costas e retorne devagar.\n**DICAS:** Variação muito segura para as articulações dos ombros e punhos.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-barra-fixa-neutra.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada Invertida (Australian Pull‑Up)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione uma barra no rack ou Smith na altura do quadril. Fique abaixo da barra segurando-a com pegada pronada.\n**EXECUÇÃO:** Puxe o peito em direção à barra, mantendo o corpo reto como uma prancha. Retorne controladamente.\n**DICAS:** Quanto mais baixo a barra estiver em relação ao solo, maior será a dificuldade do exercício.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-invertida-australian-pullup.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada Curvada com Barra",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra com pegada pronada. Incline o tronco (~45°) mantendo as costas retas e joelhos levemente flexionados.\n**EXECUÇÃO:** Puxe a barra em direção ao abdômen, mantendo os cotovelos próximos ao tronco. Retorne alongando as dorsais.\n**DICAS:** Mantenha a coluna neutra e evite balançar o tronco para 'subir' o peso.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-curvada-com-barra.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada Pendlay",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Similar à remada curvada, mas o tronco fica paralelo ao chão e a barra começa no solo em cada repetição.\n**EXECUÇÃO:** Puxe a barra de forma explosiva em direção ao peito inferior e retorne ao solo controladamente.\n**DICAS:** Exercício de potência pura para as costas. Não use o impulso das pernas ou tronco; o movimento deve ser estritamente de puxada.",
    gifUrl: "https://www.hipertrofia.org/blog/wp-content/uploads/2025/06/remada-pendlay.gif",
  },
  {
    category: "Costas",
    name: "Remada T-Bar",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione uma barra em um canto (landmine) ou use o suporte específico. Utilize o puxador em triângulo sob a barra.\n**EXECUÇÃO:** Puxe a barra em direção ao abdômen inferior, aproximando as escápulas no topo. Retorne controladamente.\n**DICAS:** Manter os cotovelos colados ao corpo enfatiza as dorsais e a porção média das costas.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-em-pe-com-barra-T.gif",
  },
  {
    category: "Costas",
    name: "Remada Unilateral com Halter",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie um joelho e uma mão em um banco plano. Segure um halter com a outra mão.\n**EXECUÇÃO:** Puxe o halter em direção ao quadril, mantendo o cotovelo rente ao tronco. Retorne alongando totalmente a dorsal.\n**DICAS:** Não gire o tronco durante a puxada. Imagine que está levando o cotovelo para trás e para cima.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif",
  },
  {
    category: "Costas",
    name: "Remada Sentada na Polia Baixa",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se de frente para a polia baixa, apoie os pés e mantenha os joelhos ligeiramente flexionados.\n**EXECUÇÃO:** Puxe o pegador em direção ao abdômen, mantendo a coluna ereta. Retorne controlando a carga e alongando as costas.\n**DICAS:** Evite balançar o tronco excessivamente. O foco deve ser o movimento das escápulas e a contração das dorsais.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif",
  },
  {
    category: "Costas",
    name: "Remada Unilateral na Smith",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione-se de lado para a barra do Smith. Segure a barra com uma mão (pegada neutra ou pronada).\n**EXECUÇÃO:** Realize o movimento de remada, puxando a barra para cima enquanto mantém o corpo estável.\n**DICAS:** A trajetória guiada permite um foco maior na contração muscular, sendo excelente para isolar cada lado das costas.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-no-smith-com-pegada-invertida.gif",
  },
  {
    category: "Costas",
    name: "Remada no Landmine",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Utilize uma barra no suporte Landmine. Incline o tronco sobre a barra, pés bem apoiados.\n**EXECUÇÃO:** Segure a extremidade da barra e realize a remada, focando no movimento do cotovelo para trás.\n**DICAS:** O ângulo de puxada único do landmine oferece um estímulo diferente para as dorsais e exige estabilidade do core.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-no-landmine.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada Unilateral com Kettlebell",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Similar à remada unilateral com halter (serrote), mas utilizando um kettlebell.\n**EXECUÇÃO:** Puxe o kettlebell em direção ao quadril, sentindo a ativação da dorsal. Retorne alongando.\n**DICAS:** A distribuição de peso e a alça do kettlebell desafiam mais a força de preensão e a estabilidade do ombro.",
    gifUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifYvs5x6cNrxsQT6PzeOTLdN1fB2z-XCxSLXNS8-T7YjKff4AsEQN9gMycNnAK07R60qumYQFv6Cs9WmzVKHTllMvXJYGXw_2-xWKoEauY53UMNimDqtgxlPP3DUnEo_4XTbufoNI25D4/s674/1+arm+row.gif",
  },
  {
    category: "Costas",
    name: "Remada Renegada",
    sets: 3,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de prancha alta, segurando dois halteres apoiados no solo na largura dos ombros.\n**EXECUÇÃO:** Realize uma remada com um braço enquanto estabiliza o corpo com o outro. Alterne os lados sem girar o quadril.\n**DICAS:** Desafio extremo para a estabilidade do core e força das costas. Mantenha os pés afastados para maior equilíbrio.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/remada-renegada-renegade-row.gif",
  },
  {
    category: "Costas",
    name: "Remada com Apoio no Peito",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste a máquina para que o apoio de peito fique confortável. Sente-se e segure as manoplas com pegada firme.\n**EXECUÇÃO:** Puxe as manoplas em direção ao corpo, mantendo o peito pressionado contra o suporte para estabilizar a coluna.\n**DICAS:** Excelente para isolar a musculatura das costas sem sobrecarregar a lombar. Foco na aproximação das escápulas.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-com-apoio-no-peito.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada Selle Row",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de bruços em um banco inclinado ou suporte específico (Seal Row) de modo que os braços fiquem pendentes.\n**EXECUÇÃO:** Puxe os halteres ou a barra em direção ao abdômen inferior, mantendo o tronco imóvel contra o banco.\n**DICAS:** Esta variação elimina qualquer auxílio do tronco ou pernas, garantindo um isolamento absoluto das dorsais.",
    gifUrl:
      "https://i.pinimg.com/originals/38/59/23/3859233fc9656123b74402402a066eba.gif",
  },
  {
    category: "Costas",
    name: "Remada Alta na Máquina",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé na máquina articulada ou utilize a polia baixa com barra reta. Mantenha os joelhos levemente flexionados.\n**EXECUÇÃO:** Puxe as manoplas para cima rente ao corpo, elevando os cotovelos até a linha dos ombros.\n**DICAS:** Foca no trapézio médio/superior e deltoide lateral. Mantenha os punhos relaxados; quem puxa são os cotovelos.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-alta-na-maquina.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Puxada com Braço Reto (Straight‑Arm Pulldown)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Prenda uma barra reta na polia alta. Incline o tronco ligeiramente para frente e mantenha os braços estendidos.\n**EXECUÇÃO:** Puxe a barra em um arco descendente até as coxas. Retorne controladamente até a linha dos ombros.\n**DICAS:** Exercício de isolamento que atinge a grande dorsal sem recrutar o bíceps. Mantenha o core contraído para estabilidade.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-com-braco-reto-straightarm-pulldown.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Pull-Over na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se no banco plano ou utilize a polia baixa com a corda/barra.\n**EXECUÇÃO:** Puxe a carga por cima da cabeça em um arco amplo até a linha do abdômen. Retorne sentindo o alongamento das dorsais.\n**DICAS:** Enfatiza o serrátil e a expansão da caixa torácica. Mantenha os cotovelos em um ângulo fixo durante o movimento.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-pull-over-na-polia.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Levantamento Terra",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Barra no solo sobre o meio dos pés. Agache mantendo as costas retas e segure a barra.\n**EXECUÇÃO:** Suba com a barra rente às pernas, estendendo joelhos e quadril simultaneamente. Termine em posição ereta.\n**DICAS:** Exercício composto fundamental. Mantenha o core firme e não permita que a coluna lombar arredonde.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-levantamento-terra.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Stiff (Peso Morto Romeno)",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra ou halteres à frente das coxas. Mantenha os joelhos ligeiramente flexionados e fixos.\n**EXECUÇÃO:** Desça a carga rente às pernas, empurrando o quadril para trás até sentir o alongamento dos posteriores. Suba contraindo os glúteos.\n**DICAS:** Mantenha as costas retas em todo o percurso. O movimento é uma 'dobradiça' de quadril.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/12/dumbbell-stiff-leg-deadlift.gif",
  },
  {
    category: "Costas",
    name: "Peso Morto Sumô",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pés bem afastados com pontas para fora. Segure a barra por dentro das pernas.\n**EXECUÇÃO:** Levante a barra mantendo o peito alto e os joelhos apontados para fora, alinhados aos pés.\n**DICAS:** Exige mais dos adutores e permite manter o tronco mais vertical do que a versão convencional.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-peso-morto-sumo.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Bom Dia",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Coloque a barra sobre o trapézio. Pés na largura do quadril e joelhos levemente flexionados.\n**EXECUÇÃO:** Incline o tronco para frente projetando o quadril para trás até as costas ficarem quase paralelas ao solo. Retorne à posição inicial.\n**DICAS:** Foco intenso nos paravertebrais e posteriores de coxa. Mantenha a coluna neutra e evite sobrecarga excessiva.",
    gifUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Good-Morning.gif",
  },
  {
    category: "Costas",
    name: "Extensão Lombar (Back Extension)",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie o quadril no suporte de hiperextensão.\n**EXECUÇÃO:** Desça o tronco de forma controlada e suba até que seu corpo forme uma linha reta. Não ultrapasse esse ponto.\n**DICAS:** Excelente para fortalecer os eretores da espinha e prevenir dores nas costas.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-extensao-lombar-back-extension.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Extensão Lombar na Máquina",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na máquina de extensão lombar.\n**EXECUÇÃO:** Empurre o encosto para trás usando a força da região lombar. Retorne devagar.\n**DICAS:** Versão assistida e mais controlada para fortalecimento da coluna.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-extensao-lombar-na-maquina.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Superman",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de bruços no chão com braços e pernas estendidos.\n**EXECUÇÃO:** Eleve simultaneamente braços, peito e pernas do chão. Mantenha por 1-2 segundos e desça.\n**DICAS:** Exercício de baixo impacto mas muito eficaz para toda a cadeia posterior.",
    gifUrl:
      "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/01/Superman.gif",
  },
  {
    category: "Costas",
    name: "Bird‑Dog",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique de quatro no chão (mãos e joelhos apoiados).\n**EXECUÇÃO:** Estenda o braço direito e a perna esquerda simultaneamente. Alterne os lados mantendo o equilíbrio.\n**DICAS:** Foca na estabilidade e coordenação do core e músculos das costas.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-birddog.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Nado de Costas",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de bruços no chão.\n**EXECUÇÃO:** Simule o movimento de nado de costas, elevando o tronco e alternando os braços para trás e para frente.\n**DICAS:** Ótimo para mobilidade de ombros e resistência dos eretores da coluna.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-nado-de-costas.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Mobilização Gato-Vaca (Cat‑Cow)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique de quatro.\n**EXECUÇÃO:** Arqueie as costas para cima (gato) e depois flexione a coluna para baixo (vaca), olhando para cima.\n**DICAS:** Exercício de mobilidade e relaxamento da coluna vertebral.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-mobilizacao-gato-vaca-catcow.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Puxada até o Peito (Lat Pull‑In)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Na polia alta, use pegada aberta.\n**EXECUÇÃO:** Puxe a barra até o peito ao mesmo tempo que realiza um crunch abdominal leve, contraindo bem o core.\n**DICAS:** Integra o dorsal com o trabalho de abdominal e controle de tronco.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-ate-o-peito-lat-pullin.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Ativação Escapular na Barra (Scapular Pull‑Up)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pendure-se na barra fixa com braços estendidos.\n**EXECUÇÃO:** Sem dobrar os cotovelos, eleve o corpo apenas movendo as escapulas para baixo e para trás. Desça.\n**DICAS:** Fundamental para aprender a ativar as costas antes de começar a puxar o bíceps.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-ativacao-escapular-na-barra-scapular-pullup.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada no TRX",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure nas alças do TRX, incline o corpo para trás.\n**EXECUÇÃO:** Puxe o corpo em direção às alças mantendo os cotovelos próximos. O grau de inclinação dita a dificuldade.\n**DICAS:** A instabilidade do TRX exige muito mais dos músculos estabilizadores do core e costas.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-no-trx.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada com Argolas",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Mesma base da remada TRX, mas usando argolas de ginástica.\n**EXECUÇÃO:** Puxe o corpo mantendo as argolas paralelas ou girando-as para pegada supinada no topo.\n**DICAS:** As argolas oferecem liberdade total de movimento para o punho, sendo muito confortáveis.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-com-argolas.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Abertura com Banda",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure uma banda elástica curta à sua frente com os braços esticados.\n**EXECUÇÃO:** Afaste os braços para os lados 'abrindo' a banda até que ela toque o peito. Retorne devagar.\n**DICAS:** Perfeito para postura e ativação de romboides e trapézio médio.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-abertura-com-banda.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Puxada Facial",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use uma corda na polia alta. Segure com as palmas voltadas uma para a outra.\n**EXECUÇÃO:** Puxe a corda em direção ao seu rosto, abrindo as extremidades da corda conforme ela se aproxima da testa.\n**DICAS:** Essencial para saúde dos ombros e desenvolvimento do deltoide posterior e trapézio.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-facial.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Crucifixo Invertido",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use a máquina Peck-Deck de costas para o assento ou halteres inclinado.\n**EXECUÇÃO:** Abra os braços para trás focando na parte posterior do ombro e meio das costas.\n**DICAS:** Não use o impulso. Foque na contração muscular consciente.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-crucifixo-invertido.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Caminhada do Fazendeiro (Farmer’s Carry)",
    sets: 4,
    reps: 60,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure um halter pesado em cada mão.\n**EXECUÇÃO:** Caminhe mantendo a postura perfeita, peito alto e ombros encaixados por um tempo ou distância definidos.\n**DICAS:** Constrói uma força de pegada colossal e estabilidade de tronco imbatível.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-caminhada-do-fazendeiro-farmers-carry.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Puxada no Rack",
    sets: 4,
    reps: 6,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Coloque a barra no rack em uma altura acima dos joelhos.\n**EXECUÇÃO:** Realize a puxada final do levantamento terra, focando no encaixe das escapulas no topo.\n**DICAS:** Permite usar cargas muito pesadas para focar na espessura total das costas.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-puxada-no-rack.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada Meadow Unilateral",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use o sistema landmine. Fique de lado para a barra.\n**EXECUÇÃO:** Segure a ponta da barra e faça a remada com um braço de cada vez, mantendo a inclinação.\n**DICAS:** O ângulo lateral permite um alongamento excelente da grande dorsal.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/costas-remada-meadow-unilateral.gif?raw=true",
  },
  {
    category: "Costas",
    name: "Remada T-Bar Inclinada",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na máquina T-Bar com o peito apoiado no encosto inclinado.\n**EXECUÇÃO:** Puxe o peso em direção ao corpo e retorne lentamente.\n**DICAS:** O apoio inclinado permite uma amplitude de movimento maior com menos estresse lombar.",
    gifUrl:
      "https://media.tenor.com/dRQP9z6o7VMAAAAM/remada-inclinada-a-45-graus.gif",
  },

  // OMBROS
  {
    category: "Ombros",
    name: "Desenvolvimento com Halteres",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se ou fique em pé. Segure os halteres ao lado das orelhas, com os cotovelos apontados para fora (~70°).\n**EXECUÇÃO:** Empurre os halteres para cima em um movimento convergente, sem batê-los no topo. Retorne devagar até a linha do queixo.\n**DICAS:** A versão com halteres exige maior estabilidade e permite uma amplitude de movimento mais natural que a barra.",
    gifUrl:
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Desenvolvimento-com-Halteres-H.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento com Barra",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra com as mãos ligeiramente além da largura dos ombros, cotovelos posicionados à frente da barra.\n**EXECUÇÃO:** Empurre a barra para cima até a extensão total. No topo, projete levemente a cabeça para frente para alinhar o peso.\n**DICAS:** Mantenha o core firme para não arquear a lombar. No retorno, a barra deve descer até a parte superior do peito.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/12/desenvolvimento-militar.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento Arnold",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Inicie com os halteres à frente do rosto, palmas voltadas para você. Cotovelos fechados.\n**EXECUÇÃO:** Empurre os halteres enquanto gira as palmas para frente (supinação para pronação). Retorne girando de volta.\n**DICAS:** Variação que recruta as três cabeças do deltoide de forma muito eficiente. Mantenha o movimento fluido.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-desenvolvimento-arnold-para-ombros.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé, halteres ao lado do corpo com as palmas voltadas para as coxas.\n**EXECUÇÃO:** Eleve os braços lateralmente até a altura dos ombros, mantendo uma leve flexão nos cotovelos. Desça devagar.\n**DICAS:** Imagine que está 'derramando' água de uma jarra no ponto mais alto para isolar melhor o deltoide lateral.",
    gifUrl:
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Lateral-com-Halteres.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral na Polia",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure o pegador da polia baixa com uma mão. Fique de lado para o aparelho.\n**EXECUÇÃO:** Eleve o braço lateralmente até a altura do ombro. Retorne controlando a tensão do cabo.\n**DICAS:** Diferente do halter, o cabo mantém o músculo sob tensão constante durante todo o trajeto.",
    gifUrl:
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Unilateral-na-Polia.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Frontal com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure os halteres à frente das coxas, palmas para baixo.\n**EXECUÇÃO:** Eleve um braço de cada vez (ou ambos) à frente até a altura do ombro. Desça lentamente.\n**DICAS:** Não use o balanço do corpo. Mantenha o movimento estritamente nos ombros.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-front-raise.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Frontal com Barra",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure uma barra curta ou a barra olímpica à frente das coxas.\n**EXECUÇÃO:** Eleve a barra à frente até a linha dos olhos e retorne de forma controlada.\n**DICAS:** A pegada com barra mantém a distância constante entre as mãos, ótima para estabilidade.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/03/barbell-front-raise.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Frontal na Polia",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure o pegador na polia baixa. Fique de costas ou de frente (dependendo da variação).\n**EXECUÇÃO:** Eleve a mão à frente até a altura dos ombros contra a resistência contínua do cabo.\n**DICAS:** A polia elimina o 'ponto morto' no início do movimento.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/elevacao-frontal-no-cabo.gif",
  },
  {
    category: "Ombros",
    name: "Remada Alta com Barra",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra com pegada bem aberta à frente das coxas.\n**EXECUÇÃO:** Puxe a barra em direção ao queixo, elevando os cotovelos o máximo possível. Mantenha a barra rente ao corpo.\n**DICAS:** A pegada bem aberta foca muito mais no deltoide lateral do que no trapézio.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/03/barbell-widegrip-upright-row.gif",
  },
  {
    category: "Ombros",
    name: "Remada Alta com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure um halter em cada mão à frente do corpo.\n**EXECUÇÃO:** Puxe os pesos para cima, guiando com os cotovelos. Retorne controladamente.\n**DICAS:** Versão que permite que cada ombro trabalhe de forma independente, excelente para equilíbrio.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-remada-alta-em-pe-com-halteres.gif",
  },
  {
    category: "Ombros",
    name: "Crucifixo Inverso com Halteres",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Incline o tronco para frente até ficar quase paralelo ao chão. Halteres pendurados abaixo.\n**EXECUÇÃO:** Abra os braços para os lados (como se batesse asas), focando na parte de trás dos ombros.\n**DICAS:** Não use pesos excessivos que exijam trancos. O movimento deve ser puro isolamento.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-crucifixo-invertido-com-halteres.gif",
  },
  {
    category: "Ombros",
    name: "Crucifixo Inverso na Polia",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Cruze os cabos na sua frente (segure o cabo esquerdo com a mão direita e vice-versa) na polia alta.\n**EXECUÇÃO:** Abra os braços para trás e para fora, sentindo o deltoide posterior esmagar.\n**DICAS:** Manter os braços esticados ajuda a focar inteiramente na porção posterior do ombro.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/03/cable-crossover-revers-fly.gif",
  },
  {
    category: "Ombros",
    name: "Crucifixo Inverso na Máquina",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se de costas para a máquina articulada, ajuste o banco.\n**EXECUÇÃO:** Abra as manoplas para trás mantendo os cotovelos na altura dos ombros. Retorne devagar.\n**DICAS:** Mantém a técnica protegida pela trajetória guiada da máquina.",
    gifUrl:
      "https://grandeatleta.com.br/wp-content/uploads/2023/10/Crucifixo-inverso-na-maquina-como-fazer-musculos.gif",
  },
  {
    category: "Ombros",
    name: "Puxada Facial",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use uma corda na polia alta. Segure com as palmas para dentro.\n**EXECUÇÃO:** Puxe a corda em direção à sua testa, abrindo as mãos no final do movimento.\n**DICAS:** Ótimo para prevenir lesões e fortalecer a manguito rotador e a postura.",
    gifUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif",
  },
  {
    category: "Ombros",
    name: "Remada Baixa na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na remada baixa. Use o triângulo.\n**EXECUÇÃO:** Puxe em direção ao peitoral superior (mais alto que o normal) abrindo os cotovelos para os lados.\n**DICAS:** Ao puxar mais alto, você transfere o foco das dorsais para o deltoide posterior e trapézio.",
    gifUrl:
      "https://media.tenor.com/vy_b35185M0AAAAM/remada-baixa-triangulo.gif",
  },
  {
    category: "Ombros",
    name: "Remada Unilateral com Halteres",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie uma mão em um banco, halter na outra.\n**EXECUÇÃO:** Puxe o halter para cima e para trás com o cotovelo bem aberto.\n**DICAS:** Variação de remada focada especificamente na parte de trás do ombro.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento Militar",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé, barra apoiada na parte superior do peito.\n**EXECUÇÃO:** Empurre a barra acima da cabeça mantendo o corpo totalmente firme.\n**DICAS:** Um dos melhores construtores de massa total para os ombros. Requer muito esforço do core.",
    gifUrl: "https://media.tenor.com/vFJSvh8AvhAAAAAM/a1.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento com Barra Guiada",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na máquina Smith, barra na altura do queixo.\n**EXECUÇÃO:** Empurre a barra para cima. A trajetória guiada ajuda a isolar os ombros sem precisar equilibrar o peso.\n**DICAS:** Permite focar totalmente na conexão mente-músculo e na falha segura.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/01/smith-seated-shoulder-press.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento Sentado com Halteres",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se em um banco com encosto firme (~90°). Posicione os halteres ao lado das orelhas.\n**EXECUÇÃO:** Empurre os halteres para cima de forma controlada. Retorne até a altura do queixo.\n**DICAS:** O apoio nas costas permite o uso de cargas maiores com estabilidade extra para a coluna.",
    gifUrl:
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Desenvolvimento-com-Halteres-H.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento em Pé com Halteres",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé, pés na largura dos ombros. Segure os halteres ao lado das orelhas, cotovelos levemente à frente.\n**EXECUÇÃO:** Empurre para cima mantendo o core e glúteos contraídos para evitar oscilações.\n**DICAS:** Exige grande estabilidade e controle do tronco. Excelente para força funcional.",
    gifUrl:
      "https://treinototal.com.br/wp-content/uploads/2023/11/desenvolvimento-com-halteres-em-pe.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Faixa Elástica",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pise sobre a banda elástica e segure as extremidades. Mantenha os braços estendidos.\n**EXECUÇÃO:** Eleve os braços lateralmente até a altura dos ombros. Retorne controlando a tensão.\n**DICAS:** A resistência elástica é progressiva; o pico de carga ocorre no topo da contração.",
    gifUrl: "https://i.ytimg.com/vi/DcQ_RJZIqyQ/maxresdefault.jpg",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Corda",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Prenda uma corda na polia baixa. Segure as pontas com as mãos próximas.\n**EXECUÇÃO:** Realize a elevação lateral guiando o movimento com os cotovelos. Afaste as mãos no topo.\n**DICAS:** A corda oferece uma pegada neutra e confortável, permitindo um arco de movimento fluido.",
    gifUrl: "https://i.makeagif.com/media/11-19-2016/UTaLoY.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Anilhas",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure uma anilha em cada mão.\n**EXECUÇÃO:** Faça a elevação lateral. A distribuição de peso da anilha muda levemente a sensação do exercício.\n**DICAS:** Excelente variação quando os halteres estão sendo usados ou para quebrar a rotina.",
    gifUrl:
      "https://media.tenor.com/cy46UbnfUrkAAAAM/eleva%C3%A7%C3%A3o-lateral-hateres.gif",
  },
  {
    category: "Ombros",
    name: "Remada Alta com Faixa Elástica",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pise no meio da faixa e segure as pontas.\n**EXECUÇÃO:** Puxe as mãos em direção ao queixo, elevando bem os cotovelos.\n**DICAS:** A faixa elástica oferece uma tensão 'elástica' progressiva excelente para o trapézio.",
    gifUrl:
      "https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-499800302-1024x950.jpg",
  },
  {
    category: "Ombros",
    name: "Remada Alta com Corda",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a corda presa na polia baixa.\n**EXECUÇÃO:** Puxe para cima em direção ao queixo abrindo a corda no topo.\n**DICAS:** A corda permite uma amplitude maior e mais liberdade para os punhos.",
    gifUrl: "https://i.makeagif.com/media/8-03-2021/shHPS1.gif",
  },
  {
    category: "Ombros",
    name: "Remada Alta com Anilhas",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure uma anilha pesada (ou duas menores).\n**EXECUÇÃO:** Puxe em direção ao queixo com os cotovelos altos.\n**DICAS:** Trabalha a força de pegada simultaneamente.",
    gifUrl: "https://i.ytimg.com/vi/RY2p9jhfBig/maxresdefault.jpg",
  },
  {
    category: "Ombros",
    name: "Crucifixo Inverso com Faixa Elástica",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a faixa à frente, incline o tronco.\n**EXECUÇÃO:** Abra os braços para trás contra a resistência elástica.\n**DICAS:** Ótica para home-training ou como aquecimento para o treino de ombros.",
    gifUrl:
      "https://i.ibb.co/21kfNgKz/A-complete-step-by-step-illustration-of-the-Reverse-Fly-with-Resistance-Band-Crucifixo-Inverso-co.png",
  },
  {
    category: "Ombros",
    name: "Crucifixo Inverso com Corda",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use a corda na polia alta ou média.\n**EXECUÇÃO:** Abra os braços para trás e para os lados, focado no deltoide posterior.\n**DICAS:** Tensão constante proporcionada pelos cabos.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/03/cable-crossover-revers-fly.gif",
  },
  {
    category: "Ombros",
    name: "Crucifixo Inverso com Anilhas",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure anilhas leves. Incline o tronco.\n**EXECUÇÃO:** Realize a abertura posterior.\n**DICAS:** Requer muito controle para não usar o balanço dos pesos.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/01/crucifixo-invertido-com-halteres.gif",
  },
  {
    category: "Ombros",
    name: "Puxada Facial com Faixa Elástica",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Prenda a faixa em um suporte alto.\n**EXECUÇÃO:** Puxe em direção à testa, abrindo os braços.\n**DICAS:** Excelente para reabilitação e saúde postural.",
    gifUrl:
      "https://assets.menshealth.co.uk/main/assets/84-Resistance-band-face-pulls-PS.gif?mtime=1526397980",
  },
  {
    category: "Ombros",
    name: "Puxada Facial com Corda",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use a corda na polia alta.\n**EXECUÇÃO:** Puxe em direção ao rosto abrindo a corda.\n**DICAS:** Foque em esmagar a parte de trás dos ombros.",
    gifUrl: "https://gymvisual.com/img/p/2/4/9/5/4/24954.gif",
  },
  {
    category: "Ombros",
    name: "Puxada Facial com Anilhas",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure anilhas à frente do rosto.\n**EXECUÇÃO:** Puxe em direção à testa.\n**DICAS:** Desafiador para os estabilizadores do punho.",
    gifUrl: "https://gymvisual.com/img/p/2/5/0/3/2/25032.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento com Faixa Elástica",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pise na faixa e segure as extremidades nos ombros.\n**EXECUÇÃO:** Empurre para cima contra a resistência progressiva.\n**DICAS:** Aumenta a dificuldade no topo, desafiando o lockout.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2022/03/52051301-desenvolvimento-em-pe-com-elastico.gif",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento com Corda",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a corda na polia baixa.\n**EXECUÇÃO:** Empurre para cima.\n**DICAS:** Oferece um vetor de força ligeiramente diferente e constante.",
    gifUrl:
      "https://i.ibb.co/Mxq8Bcsy/Uma-ilustra-o-realista-e-din-mica-de-uma-pessoa-realizando-um-exerc-cio-de-desenvolvimento-com-cord.png",
  },
  {
    category: "Ombros",
    name: "Desenvolvimento com Anilhas",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure anilhas na altura dos ombros.\n**EXECUÇÃO:** Empurre para cima.\n**DICAS:** Trabalha o equilíbrio e a pegada.",
    gifUrl: "https://i1.ytimg.com/vi/BG9ojmx9RyI/hqdefault.jpg",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Faixa Elástica",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Pise sobre a faixa elástica e segure as extremidades.\n**EXECUÇÃO:** Eleve os braços lateralmente contra a tensão crescente do elástico.\n**DICAS:** A resistência aumenta no topo do movimento, justamente onde o músculo está mais contraído.",
    gifUrl: "https://i.ytimg.com/vi/DcQ_RJZIqyQ/maxresdefault.jpg",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Corda",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a corda presa à polia baixa.\n**EXECUÇÃO:** Faça a elevação lateral. A corda permite uma pega mais natural e confortável para o punho.\n**DICAS:** Mantém a tensão fluida durante toda a trajetória.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/12/cable-one-arm-lateral-raise.gif",
  },
  {
    category: "Ombros",
    name: "Elevação Lateral com Anilhas",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure uma anilha em cada mão.\n**EXECUÇÃO:** Faça a elevação lateral.\n**DICAS:** Excelente para isolar o deltoide lateral.",
    gifUrl: "https://i.makeagif.com/media/10-23-2024/t0n5KK.gif",
  },

  // BRAÇOS
  // Bíceps
  {
    category: "Bíceps",
    name: "Rosca Direta",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé, pés na largura dos ombros. Segure os halteres ou barra ao lado das coxas, palmas para frente.\n**EXECUÇÃO:** Flexione os cotovelos trazendo a carga em direção aos ombros. Retorne de forma lenta e controlada.\n**DICAS:** Mantenha os cotovelos fixos ao lado do corpo e o tronco imóvel. Evite o 'roubo' com as pernas ou costas.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-rosca-direta.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Rosca Scott (Rosca Scott)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se no banco Scott e apoie os braços totalmente no suporte acolchoado. Segure a barra EZ.\n**EXECUÇÃO:** Flexione os braços trazendo a barra em direção ao rosto. Desça até quase estender totalmente os braços.\n**DICAS:** O suporte isola o bíceps ao impedir o movimento dos ombros. Mantenha os punhos firmes e estáveis.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-rosca-scott-rosca-scott.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Rosca Martelo",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure os halteres ao lado do corpo com as palmas voltadas para as coxas (pegada neutra).\n**EXECUÇÃO:** Flexione os cotovelos mantendo a pegada neutra (polegares para cima) durante todo o movimento.\n**DICAS:** Excelente para desenvolver o braquial e o braquiorradial (antebraço), aumentando a espessura do braço.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-rosca-martelo.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Rosca Alternada",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Halteres ao lado das coxas. Mantenha a postura ereta e abdômen contraído.\n**EXECUÇÃO:** Suba um braço de cada vez, girando a palma para cima (supinação) durante a subida. Alterne os lados.\n**DICAS:** A rotação permite recrutar a função de supinação do bíceps. Mantenha os cotovelos imóveis.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-rosca-alternada.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Rosca Concentrada",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se no banco. Apoie o cotovelo na parte interna da coxa correspondente.\n**EXECUÇÃO:** Realize a flexão do braço focando na contração máxima do bíceps no topo. Retorne devagar.\n**DICAS:** Um dos melhores exercícios para construir o 'pico' do bíceps. Não use o tronco para puxar o peso.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-rosca-concentrada.gif?raw=true",
  },
  {
    category: "Antebraço",
    name: "Rosca Inversa",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra ou halteres com as palmas voltadas para baixo (pegada pronada).\n**EXECUÇÃO:** Realize a flexão dos braços mantendo a pegada invertida durante todo o percurso.\n**DICAS:** Enfatiza a musculatura do antebraço e a porção externa do bíceps. Mantenha os pulsos firmes.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/antebraco-rosca-inversa.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Rosca Drag (Arrastada)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé, segure a barra com pegada supinada. Mantenha os ombros relaxados.\n**EXECUÇÃO:** Puxe a barra para cima rente ao tronco, projetando os cotovelos para trás. Sinta o 'esmagamento' do bíceps.\n**DICAS:** Ao manter a carga colada ao corpo, você remove a ação dos deltoides e foca no pico de contração.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-rosca-drag-arrastada.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Rosca Zottman",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Comece como uma rosca martelo.\n**EXECUÇÃO:** Suba em pegada neutra ou supinada e, no topo, gire as palmas para baixo e desça em pegada pronada.\n**DICAS:** Um exercício completo que trabalha bíceps na subida e antebraço na descida (excêntrica).",
    gifUrl: "https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/rosca-zottman.gif",
  },

  // Tríceps
  {
    category: "Tríceps",
    name: "Tríceps Testa",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado no banco plano. Segure a barra EZ acima do rosto com os braços estendidos.\n**EXECUÇÃO:** Flexione os cotovelos levando a barra em direção à testa e empurre de volta à posição inicial.\n**DICAS:** Mantenha os cotovelos paralelos e apontados para o teto. Evite que eles se abram lateralmente.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/02/barbell-lying-triceps-extension-skull-crusher.gif",
  },
  {
    category: "Tríceps",
    name: "Tríceps Coice",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Incline o tronco à frente, apoie uma mão no suporte. Mantenha o cotovelo fixo e alto ao lado das costelas.\n**EXECUÇÃO:** Estenda o braço totalmente para trás (contração isométrica no topo) e retorne devagar.\n**DICAS:** Não use o impulso. O movimento deve ser realizado exclusivamente pela articulação do cotovelo.",
    gifUrl:
      "https://karoldeliberato.com.br/wp-content/uploads/2023/05/image68.gif",
  },
  {
    category: "Tríceps",
    name: "Tríceps na Polia (Pushdown)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra ou corda na polia alta. Mantenha os cotovelos 'colados' nas laterais do corpo.\n**EXECUÇÃO:** Estenda os braços para baixo até o bloqueio total do tríceps. Retorne controladamente até 90°.\n**DICAS:** Evite projetar os ombros para frente. Foque na extensão total para recrutar as três cabeças do tríceps.",
    gifUrl:
      "https://meutreinador.com/wp-content/uploads/2023/12/05_Extensao-de-Triceps-na-Polia.gif",
  },
  {
    category: "Tríceps",
    name: "Tríceps Francês",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se ou fique em pé. Segure um halter com as duas mãos acima da cabeça, braços estendidos.\n**EXECUÇÃO:** Flexione os cotovelos descendo o peso atrás da nuca. Estenda totalmente os braços para cima.\n**DICAS:** Mantenha os cotovelos próximos às orelhas. O foco é o alongamento da cabeça longa do tríceps.",
    gifUrl:
      "https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/04/Triceps-Frances-com-Halteres.gif?resize=550%2C550&ssl=1",
  },
  {
    category: "Tríceps",
    name: "Mergulho em Banco",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie as mãos na borda de um banco, mantendo os braços estendidos. Pés no chão ou em outro banco à frente.\n**EXECUÇÃO:** Desça o quadril flexionando os cotovelos até formar um ângulo de 90°. Empurre de volta com força.\n**DICAS:** Mantenha as costas próximas ao banco durante o movimento. Exercício prático e eficiente.",
    gifUrl:
      "https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/triceps-mergulho-apoiado-em-dois-bancos.gif",
  },
  {
    category: "Tríceps",
    name: "Mergulho em Paralelas (Dips)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure nas barras paralelas com o corpo suspenso e braços estendidos.\n**EXECUÇÃO:** Desça o corpo mantendo o tronco vertical (para focar no tríceps) e empurre de volta à posição inicial.\n**DICAS:** Evite inclinar o tronco para frente, pois isso transfere a carga para o peitoral inferior.",
    gifUrl:
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/paralelas-graviton.gif",
  },
  {
    category: "Tríceps",
    name: "Tríceps na Barra Fixa (Pegada Fechada)",
    sets: 4,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use uma pegada fechada na barra fixa.\n**EXECUÇÃO:** Realize a flexão de braço (pull-up) focando na força dos braços.\n**DICAS:** Variação avançada que exige muita força de bíceps e tríceps simultaneamente.",
    gifUrl:
      "https://image.tuasaude.com/media/article/ts/eo/treino-de-triceps-em-casa_74246.gif?width=686&height=487",
  },
  {
    category: "Tríceps",
    name: "Tríceps Testa Unilateral",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado, faça a extensão de tríceps com apenas um halter.\n**EXECUÇÃO:** Controle bem a descida até a orelha oposta ou testa.\n**DICAS:** Permite corrigir desequilíbrios de força entre os braços.",
    gifUrl: "https://i.makeagif.com/media/9-25-2021/yJWQht.gif",
  },

  // Antebraço / Acessórios
  {
    category: "Antebraço",
    name: "Rosca de Punho",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Antebraços apoiados em um banco plano, palmas para cima, mãos segurando a barra ou halteres.\n**EXECUÇÃO:** Flexione apenas os punhos para cima e desça alongando totalmente os flexores.\n**DICAS:** Movimento curto e focado. Mantenha os cotovelos imóveis para garantir o isolamento.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/antebraco-rosca-de-punho.gif?raw=true",
  },
  {
    category: "Antebraço",
    name: "Rosca Punho Inversa",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Mesma posição, mas com as palmas voltadas para baixo.\n**EXECUÇÃO:** Eleve os punhos para cima (extensão).\n**DICAS:** Essencial para equilíbrio muscular e saúde do punho/cotovelo.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/antebraco-rosca-punho-inversa.gif?raw=true",
  },
  {
    category: "Antebraço",
    name: "Prancha de Antebraço",
    sets: 3,
    reps: 60,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de prancha padrão sobre os antebraços.\n**EXECUÇÃO:** Mantenha a contração isométrica.\n**DICAS:** Além do core, exige resistência constante dos músculos dos antebraços para suporte.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/antebraco-prancha-de-antebraco.gif?raw=true",
  },
  {
    category: "Bíceps",
    name: "Curl de Bíceps na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Segure a barra na polia baixa.\n**EXECUÇÃO:** Realize a rosca.\n**DICAS:** A tensão constante do cabo é excelente para a hipertrofia do bíceps.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/biceps-curl-de-biceps-na-polia.gif?raw=true",
  },
  {
    category: "Tríceps",
    name: "Tríceps Corda na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Use a corda na polia alta.\n**EXECUÇÃO:** Empurre para baixo, 'abrindo' a corda no final do movimento.\n**DICAS:** Esta abertura final foca intensamente na cabeça lateral (parte externa) do tríceps.",
    gifUrl:
      "https://treinototal.com.br/br.pinterest.com/pin/triceps-corda-na-polia--346618585472851253/",
  },
  {
    category: "Tríceps",
    name: "Kickback Unilateral",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Tríceps coice unilateral.\n**EXECUÇÃO:** Extensão total do cotovelo para trás.\n**DICAS:** Mantenha o braço paralelo ao chão para máxima eficiência.",
    gifUrl: "https://media.tenor.com/PZjMZqyfPgcAAAAM/db-tricep-kickback.gif",
  },

  // ABDOMINAIS
  {
    category: "Abdominais",
    name: "Prancha",
    sets: 3,
    reps: 60,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie-se nos antebraços e pontas dos pés. Mantenha o corpo perfeitamente alinhado, da cabeça aos calcanhares.\n**EXECUÇÃO:** Sustente a posição contraindo abdômen, glúteos e pernas. Respire de forma profunda e controlada.\n**DICAS:** Não permita que o quadril 'caia' ou suba demais. Imagine empurrar o chão com os antebraços para estabilizar os ombros.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-prancha.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Prancha Lateral",
    sets: 3,
    reps: 60,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie-se em um antebraço lateralmente. Pés um sobre o outro ou um à frente do outro para maior equilíbrio.\n**EXECUÇÃO:** Eleve o quadril até o corpo formar uma linha reta lateral. Mantenha a contração do core.\n**DICAS:** Foca intensamente nos oblíquos e na estabilidade lateral da coluna. Mantenha o pescoço alinhado.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-prancha-lateral.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Crunch (Abdominal Reto)",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas, joelhos flexionados e pés firmes no chão. Mãos levemente atrás das orelhas.\n**EXECUÇÃO:** Tire apenas as escápulas do solo, 'esmagando' o abdômen superior. Retorne controladamente.\n**DICAS:** Não puxe o pescoço com as mãos. O movimento deve ser curto e focado na contração muscular, não na altura.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-crunch-abdominal-reto.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Supra (Sit‑Up)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado com joelhos flexionados ou pernas esticadas (mais difícil). Pés apoiados.\n**EXECUÇÃO:** Eleve o tronco totalmente até a posição sentada, contraindo o abdômen por completo.\n**DICAS:** Controle a descida para que cada vértebra toque o chão individualmente. Envolve fortemente os flexores do quadril.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-supra-situp.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Elevação de Pernas (Abdominal Infra)",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas, braços ao lado do corpo ou mãos sob o quadril para estabilizar a lombar.\n**EXECUÇÃO:** Eleve as pernas esticadas até ~90° e desça lentamente sem encostar os calcanhares no solo.\n**DICAS:** Mantenha a coluna lombar pressionada contra o chão durante todo o movimento para evitar dores e focar no infra.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-elevacao-de-pernas-abdominal-infra.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Cruzado (Bicicleta)",
    sets: 4,
    reps: 20,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado, mãos atrás da cabeça (sem puxar). Pernas elevadas com joelhos a 90°.\n**EXECUÇÃO:** Traga o joelho direito ao cotovelo esquerdo enquanto estica a perna esquerda, alternando ritmicamente.\n**DICAS:** Gire o tronco para garantir a ativação dos oblíquos. Imagine que está pedalando com os pés.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-cruzado-bicicleta.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal V",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado totalmente estendido. Braços acima da cabeça.\n**EXECUÇÃO:** Eleve o tronco e as pernas simultaneamente, encontrando-os no centro e formando um 'V'.\n**DICAS:** Requer alta coordenação e força explosiva. Controle a fase excêntrica (descida) para proteger a coluna.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-v.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Canivete",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Similar ao Abdominal V, mas com foco na flexão dos joelhos.\n**EXECUÇÃO:** Realize a flexão trazendo os joelhos ao peito enquanto o tronco sobe. Tente tocar os calcanhares.\n**DICAS:** Variação um pouco mais curta e focada na compressão abdominal total. Controle o retorno.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-canivete.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Tesoura",
    sets: 4,
    reps: 20,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas, pernas elevadas a ~45 graus. Mãos sob o quadril para suporte.\n**EXECUÇÃO:** Cruze as pernas uma por cima da outra alternadamente em um movimento horizontal rápido e controlado.\n**DICAS:** Mantém a tensão constante no abdômen inferior. Não permita que a lombar descole do solo.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-tesoura.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Elevação de Quadril no Solo",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas com as mãos ao lado do corpo. Pernas estendidas em direção ao teto.\n**EXECUÇÃO:** Descole o quadril do solo usando a força do abdômen, empurrando os pés verticalmente. Retorne devagar.\n**DICAS:** Movimento curto e controlado. Evite balançar as pernas para ganhar impulso.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-elevacao-de-quadril-no-solo.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal na Polia",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** De joelhos ou em pé, segure a corda da polia alta ao lado da cabeça.\n**EXECUÇÃO:** Realize a flexão do tronco em direção ao solo, 'enrolando' a coluna. Retorne controladamente.\n**DICAS:** Permite adicionar carga progressiva. Foque em flexionar a coluna, não apenas puxar com os braços.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-na-polia.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal em Paralelas",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie os antebraços no suporte de paralelas, mantendo as costas firmes contra o encosto.\n**EXECUÇÃO:** Eleve os joelhos (ou pernas esticadas) em direção ao peito, contraindo o abdômen inferior.\n**DICAS:** Use a força do core para subir, evitando o balanço das pernas. Desça de forma controlada.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-em-paralelas.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Remador",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado totalmente estendido no chão, braços atrás da cabeça.\n**EXECUÇÃO:** Flexione o tronco e as pernas simultaneamente, abraçando os joelhos no topo do movimento. Retorne esticando tudo.\n**DICAS:** Exercício funcional e dinâmico que trabalha toda a região abdominal de forma integrada.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-remador.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal com Elevação de Quadril na Bola",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de prancha alta com as canelas apoiadas sobre a bola suíça.\n**EXECUÇÃO:** Traga os joelhos em direção ao peito rolando a bola para frente. Eleve o quadril no final.\n**DICAS:** Exige controle extremo de estabilidade. Mantenha o core contraído para não sobrecarregar os ombros.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-com-elevacao-de-quadril-na-bola.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Enrolamento",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas com braços estendidos acima da cabeça. Pés unidos.\n**EXECUÇÃO:** Suba o tronco vértebra por vértebra com controle total até sentar. Retorne 'desenrolando' a coluna.\n**DICAS:** Foco na articulação da coluna e controle do reto abdominal. Evite movimentos bruscos.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-enrolamento.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Sprinter Crunch",
    sets: 4,
    reps: 20,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas com braços ao lado do corpo e pernas estendidas.\n**EXECUÇÃO:** Suba o tronco explosivamente enquanto traz um joelho ao peito e o braço oposto à frente, como em uma corrida. Alterne.\n**DICAS:** Exercício de alta intensidade que trabalha a coordenação e a potência do core.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-sprinter-crunch.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Spider‑Man Plank",
    sets: 3,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de prancha alta (sobre as mãos) ou baixa (antebraços).\n**EXECUÇÃO:** Traga o joelho lateralmente em direção ao cotovelo do mesmo lado. Alterne os lados.\n**DICAS:** Trabalha intensamente os oblíquos e a mobilidade de quadril. Mantenha o corpo alinhado.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-spiderman-plank.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Superman",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de bruços.\n**EXECUÇÃO:** Eleve braços e pernas simultaneamente.\n**DICAS:** Fortalece toda a musculatura paravertebral e lombar.",
    gifUrl: "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-superman.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Bird Dog",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posição de gatas.\n**EXECUÇÃO:** Estique braço e perna opostos.\n**DICAS:** Fundamental para estabilidade de core e equilíbrio.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-bird-dog.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Vácuo Abdominal",
    sets: 3,
    reps: 30,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Em pé, sentado ou de quatro. Expire todo o ar dos pulmões.\n**EXECUÇÃO:** Com os pulmões vazios, 'puxe' o umbigo para dentro e para cima, mantendo o vácuo o máximo possível.\n**DICAS:** Fortalece o transverso do abdômen, responsável pela estabilização profunda e proteção da coluna.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-vacuo-abdominal.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal na Máquina",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Ajuste a máquina para que o apoio de peito/ombros esteja confortável. Segure as manoplas.\n**EXECUÇÃO:** Realize a flexão do tronco 'enrolando' o abdômen contra a resistência da máquina. Retorne devagar.\n**DICAS:** A trajetória guiada permite focar inteiramente na contração muscular sem compensações.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-na-maquina.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Declinado",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Prenda os pés no suporte do banco declinado e deite-se.\n**EXECUÇÃO:** Realize o movimento de flexão do tronco (crunch) focando na contração da parte superior do abdômen.\n**DICAS:** A inclinação aumenta significativamente a carga gravitacional. Evite usar o impulso dos braços.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-declinado.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Lateral (Flexão Lateral de Tronco)",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé segurando um halter em uma das mãos ao lado da coxa. Outra mão na cintura ou cabeça.\n**EXECUÇÃO:** Incline o tronco lateralmente para o lado do peso e retorne usando a força do oblíquo oposto.\n**DICAS:** Mantenha o quadril e as pernas imóveis. O movimento deve ocorrer apenas na coluna vertebral.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-lateral-flexao-lateral-de-tronco.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Alternado com Bola",
    sets: 4,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se na bola suíça com os pés firmes no chão. Incline o tronco levemente para trás.\n**EXECUÇÃO:** Realize a rotação do tronco de um lado para o outro de forma controlada.\n**DICAS:** A instabilidade da bola exige maior ativação dos músculos estabilizadores profundos do core.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-alternado-com-bola.gif?raw=true",
  },
  {
    category: "Abdominais",
    name: "Abdominal Bicicleta",
    sets: 4,
    reps: 20,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deitado de costas, mãos atrás da cabeça e joelhos a 90°.\n**EXECUÇÃO:** Traga o cotovelo oposto ao joelho que se aproxima, enquanto estende a outra perna. Movimento contínuo de 'pedalada'.\n**DICAS:** Mantenha a lombar pressionada contra o solo. Foque na rotação do tronco para atingir os oblíquos.",
    gifUrl:
      "https://github.com/AlefLaniel/meus-gifs-treino/blob/main/@downloads/abdominais-abdominal-bicicleta.gif?raw=true",
  },
  // GLÚTEOS
  {
    category: "Glúteos",
    name: "Elevação Pélvica com Barra",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie a parte superior das costas em um banco plano. Posicione uma barra acolchoada sobre os quadris e mantenha os pés firmes no chão, na largura dos ombros.\n**EXECUÇÃO:** Empurre os calcanhares contra o solo e eleve os quadris até que o corpo forme uma linha reta dos ombros aos joelhos. Contraia os glúteos ao máximo no topo e retorne devagar.\n**DICAS:** Evite hiperestender a lombar no topo do movimento; concentre a força inteiramente na contração do quadril.",
    gifUrl: "https://static.wixstatic.com/media/2edbed_852ea3938607497aa100eb79e600e11a~mv2.gif",
  },
  {
    category: "Glúteos",
    name: "Coadutor / Cadeira Abdutora",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Sente-se no aparelho de abdução apoiando bem a coluna. Ajuste os apoios nas laterais externas dos joelhos.\n**EXECUÇÃO:** Force as pernas para fora afastando os apoios e contraindo os glúteos laterais (glúteo médio). Retorne controladamente à posição inicial.\n**DICAS:** Incline o tronco ligeiramente para a frente para aumentar o alongamento das fibras do glúteo e focar a ativação nas porções externas.",
    gifUrl: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-aducao-de-pernas-na-maquina.gif",
  },
  {
    category: "Glúteos",
    name: "Glúteo na Polia (Kickback)",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fixe o puxador de tornozelo na polia baixa. Fique de frente para o aparelho, incline levemente o tronco e segure nos apoios.\n**EXECUÇÃO:** Estenda a perna para trás em um arco controlado, contraindo fortemente o glúteo no topo. Retorne devagar sem tocar o pé no chão.\n**DICAS:** Mantenha o quadril e a coluna estáveis, evitando arquear a lombar para chutar mais alto.",
    gifUrl: "https://karoldeliberato.com.br/wp-content/uploads/2023/04/image32-1.gif",
  },
  {
    category: "Glúteos",
    name: "Elevação Pélvica Unilateral",
    sets: 3,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de costas com os joelhos flexionados. Eleve uma perna apontando-a para o teto ou flexionada.\n**EXECUÇÃO:** Empurre o calcanhar do pé de apoio contra o solo e eleve os quadris, concentrando a força no glúteo da perna ativa.\n**DICAS:** Excelente exercício para corrigir assimetrias de força muscular entre os lados esquerdo e direito.",
    gifUrl: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/ponte-com-uma-perna-elevada-e-reta.gif",
  },
  {
    category: "Glúteos",
    name: "Agachamento Búlgaro",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione-se à frente de um banco. Coloque o peito de um dos pés apoiado no banco atrás de você.\n**EXECUÇÃO:** Flexione o joelho da perna da frente, descendo o quadril até a coxa ficar paralela ao chão. Empurre com o calcanhar para subir.\n**DICAS:** Para focar mais no glúteo do que no quadríceps, dê um passo maior à frente e incline levemente o tronco à frente na descida.",
    gifUrl: "https://image.tuasaude.com/media/article/dv/bw/agachamento-bulgaro_62764.gif?width=686&height=487",
  },
  {
    category: "Glúteos",
    name: "Abdução de Quadril Deitado (Clamshell)",
    sets: 3,
    reps: 15,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Deite-se de lado com os joelhos flexionados a 90° e os calcanhares unidos. Se puder, use uma mini band acima dos joelhos.\n**EXECUÇÃO:** Mantendo os calcanhares colados, afaste o joelho de cima o máximo possível. Segure a contração e desça devagar.\n**DICAS:** Evite girar o quadril ou o tronco para trás ao abrir a perna; isole o glúteo médio mantendo a bacia apontada para a frente.",
    gifUrl: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/11/clamshell-de-lado-deitado-no-chao.gif",
  },
  {
    category: "Glúteos",
    name: "Glúteo 4 Apoios com Caneleira",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique na posição de quatro apoios (cotovelos e joelhos no chão) com as caneleiras presas aos tornozelos.\n**EXECUÇÃO:** Eleve uma das pernas mantendo o joelho flexionado a 90°, empurrando a sola do pé em direção ao teto. Retorne controlando o peso.\n**DICAS:** Mantenha a cabeça alinhada com a coluna e o abdômen contraído para evitar sobrecarregar a região lombar.",
    gifUrl: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/quatro-apoios-com-elevacao-da-perna.gif",
  },
  {
    category: "Glúteos",
    name: "Elevação Pélvica na Máquina",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Posicione-se na máquina de elevação pélvica, travando o cinto ou o apoio estofado na altura da articulação do quadril.\n**EXECUÇÃO:** Execute a extensão de quadril empurrando a plataforma e contraindo os glúteos fortemente. Desça de forma cadenciada.\n**DICAS:** Mantenha os pés inteiramente apoiados na plataforma e direcione a força através dos calcanhares.",
    gifUrl: "https://api.smartworkout.app/asset/image/22f47884-0bda-4773-923a-c720afbfb74c",
  },
  {
    category: "Glúteos",
    name: "Stiff com Halteres (Foco Glúteos)",
    sets: 4,
    reps: 10,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé segurando um halter em cada mão à frente das coxas. Mantenha os joelhos ligeiramente destravados.\n**EXECUÇÃO:** Inicie o movimento empurrando o quadril o máximo que puder para trás, descendo os halteres rente às pernas até sentir alongar. Volte contraindo os glúteos.\n**DICAS:** O movimento é horizontal (quadril para trás), não vertical. Aperte os glúteos no topo para finalizar a extensão.",
    gifUrl: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/12/dumbbell-stiff-leg-deadlift.gif",
  },
  {
    category: "Glúteos",
    name: "Passada / Avanço Caminhando",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique em pé com os pés juntos. Você pode segurar halteres nas mãos ao lado do corpo.\n**EXECUÇÃO:** Dê um passo largo à frente, flexionando os dois joelhos até que a coxa da perna da frente fique paralela ao chão. Suba dando o passo seguinte.\n**DICAS:** Mantenha o joelho da frente alinhado com o pé. A passada larga recruta intensamente o glúteo máximo da perna da frente.",
    gifUrl: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/12/dumbbell-lunge.gif",
  },
  {
    category: "Glúteos",
    name: "Agachamento Sumô com Halter",
    sets: 4,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Afaste os pés de forma ampla com as pontas apontadas para fora (cerca de 45°). Segure um halter pesado verticalmente entre as pernas.\n**EXECUÇÃO:** Agache mantendo o tronco ereto e os joelhos apontando na mesma direção dos pés. Desça até passar da linha paralela e suba.\n**DICAS:** Foque em empurrar o chão com os calcanhares e espremer os glúteos e adutores no topo do movimento.",
    gifUrl: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-com-halter.gif",
  },
  {
    category: "Glúteos",
    name: "Abdução de Quadril em Pé na Polia",
    sets: 3,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Coloque o puxador de tornozelo na polia baixa. Fique de lado para o aparelho e prenda o puxador no pé mais distante.\n**EXECUÇÃO:** Eleve a perna para o lado de fora, mantendo o corpo reto e resistindo à tração do cabo. Retorne de forma lenta.\n**DICAS:** Segure-se na polia para manter o tronco estável. Esse exercício é focado no glúteo médio e estabilizadores do quadril.",
    gifUrl: "https://meutreinador.com/wp-content/uploads/2023/12/62_Abducao-de-quadril-na-polia-baixa.gif",
  },
  {
    category: "Glúteos",
    name: "Subida no Banco (Step-Up)",
    sets: 3,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Fique de frente para um banco firme. Posicione um pé totalmente sobre o banco.\n**EXECUÇÃO:** Faça força exclusivamente com a perna de cima para elevar o corpo até ficar em pé sobre o banco. Desça de forma lenta e controlada.\n**DICAS:** Não use a perna de baixo para pegar impulso. Quanto mais alto o banco, maior o recrutamento dos glúteos.",
    gifUrl: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/stepup-alto-no-banco-com-halteres.gif",
  },
  {
    category: "Glúteos",
    name: "Good Morning (Bom Dia)",
    sets: 3,
    reps: 12,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Coloque a barra apoiada nos ombros (trapézio), mantendo os joelhos levemente flexionados e os pés na largura dos ombros.\n**EXECUÇÃO:** Incline o tronco para a frente empurrando o quadril para trás, mantendo a coluna totalmente reta. Retorne à posição vertical contraindo os glúteos.\n**DICAS:** Mantenha o peito aberto e sinta o estiramento na cadeia posterior. Não curve as costas.",
    gifUrl: "https://www.meridian-fitness.co.uk/wp-content/uploads/2024/12/GoodMorning_2-ezgif.com-optimize-1.gif",
  },
  {
    category: "Glúteos",
    name: "Agachamento Búlgaro com Salto",
    sets: 3,
    reps: 8,
    weight: 0,
    instructions:
      "**PREPARAÇÃO:** Apoie um pé no banco atrás de você. Execute a descida do agachamento búlgaro convencional.\n**EXECUÇÃO:** Suba de forma explosiva, tirando o pé da frente totalmente do solo em um pequeno salto. Amorteça a queda suavemente.\n**DICAS:** Excelente exercício pliométrico de nível avançado para recrutar fibras de contração rápida do glúteo e melhorar a potência unilateral.",
    gifUrl: "https://api.smartworkout.app/asset/image/e7f9eb86-ea99-4d7d-9b51-743dee624eea",
  },
];
