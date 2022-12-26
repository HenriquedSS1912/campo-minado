# 🎮 Campo Minado

https://user-images.githubusercontent.com/86082129/209497862-23a1df4e-05cf-4549-8b16-0aa580e56391.mp4

## ⚙️ Sobre o projeto
Quase todo mundo já jogou Campo Minado(Minesweeper). Se pensou “eu nunca joguei” pode se considerar uma verdadeira raridade. 
Então como estou aprendendo um pouco mais sobre este Framework decidi criar o meu primeiro jogo com React Native.
  
## 📦 Desenvolvimento

* Implementei toda a logica do jogo em JavaScript. Criando assim o tabuleiro, 
 o objeto associado a cada campo com suas propriedades 
 (se esta explodido, se esta aberto, quantidade de minas por perto e etc).
* O calculo das minas ao redor do campo não é feito no começo da aplicação, 
 utilizei a estratégia Lazy Load, fazendo com que calculo das minas ao redor seja de acordo
  a abertura de cada campo selecionado pelo usuário.
* Nesse projeto tive o cuidado em separar a logica dos componentes.
* Adicionei a seleção de nível, permitindo que o usuário escolha 3 níveis de dificuldade.

## 🛠️ Construído com

* React Native;
* JavaScript;

 ## 🕹️ Breve explicação sobre o jogo e algumas dicas

#### As regras do Campo Minado são simples: 
1) Se você descobrir uma mina, o jogo acaba.
2) Se descobrir um quadrado vazio, o jogo continua.
3) Se aparecer um número, ele informará quantas minas estão escondidas nos oito quadrados que o cercam. Você usa essa informação para deduzir em que quadrados próximos é seguro clicar.

#### Dicas

1) Marque as minas. Se você suspeita que um quadrado contém uma mina, clique e segure nele por cerca de 2 segundos. Isso marca o quadrado com uma bandeira.
2) Estude os padrões. Se três quadrados seguidos exibirem os números 2, 3 e 2, provavelmente haverá três minas alinhadas ao lado desses números. Se um quadrado mostrar o número 6, todos os quadrados que o rodeiam estarão minados.
3) Explore o desconhecido. Não sabe onde clicar em seguida? Tente esvaziar algum território inexplorado. É melhor clicar no meio dos quadrados que não estão marcados do que em uma área que você suspeita estar minada.

---
⌨️ com ❤️ por [Henrique da Silva Sousa](https://www.linkedin.com/in/henrique-da-silva-sousa-2a077622b/)🚀
