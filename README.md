<h1>:monocle_face: Dash - Challenge</a></h1>

<div style="display: inline_block">
  <img src="https://img.shields.io/badge/TypeScript-brightgreen"/>
  <img src="https://img.shields.io/badge/ReactJs-brightgreen"/>
  <img src="https://img.shields.io/badge/Styled Components-brightgreen"/>
  <img src="https://img.shields.io/badge/NextJS-brightgreen"/>
  <img src="https://img.shields.io/badge/NestJS-brightgreen"/>
  <img src="https://img.shields.io/badge/MongoDb-brightgreen"/>
</div>

<img src ="https://cdn.discordapp.com/attachments/1118878755960651878/1214587842630516816/image.png?ex=65f9a813&is=65e73313&hm=678a05130cbf213dbdbde0afb8e2eb5d1b463cd7938d0a525ff54925d37be584&" />

<h2>:bookmark_tabs: Descrição</h2>
<p>Este repositório contém o código fonte e a documentação relacionados ao teste técnico realizado como parte do processo seletivo para a vaga de desenvolvedor na DashSkins. A aplicação contém funcionalidades como autenticação e rate limit.</p>

<a href="https://www.figma.com/file/TCkQSBYF6zzknsdVjYKr0f/Test?type=design&node-id=0%3A1&mode=dev&t=Wh3Ct2N9PTVjeUnJ-1">Clique aqui para ver o design do projeto</a>
<p>Ps: O projeto não seguiu o design à risca, mas está fortemente baseado nele. Durante o desenvolvimento percebi que algumas coisas ficariam melhores de outra maneira, então assim o fiz.</p>

<a href="https://www.youtube.com/watch?v=UyOsv4ah_dY&ab_channel=MatheusVieira">Clique aqui para ver o setup do projeto em vídeo</a>

<h2>:grinning: Como rodar o projeto localmente</h2>

<h3>1. Clone o repositório:</h3>
<pre>
  <code>
    git clone https://github.com/yAlucardHellsing/user-register
  </code>
</pre>

<h3>2. Entre no repositório clonado, adicione os arquivos .env e instale as dependências:</h3>
<pre>
  <code>
    cd user-register/front
  </code>
</pre>
<pre>
  <code>
    cp .env.example .env
  </code>
</pre>
<pre>
  <code>
    npm install
  </code>
</pre>

<pre>
  <code>
    cd ../back
  </code>
</pre>
<pre>
  <code>
    cp .env.example .env
  </code>
</pre>
<pre>
  <code>
    npm install
  </code>
</pre>

<h3>3. Inicie o servidor NestJS utilizando o docker-compose</h3>
<pre>
  <code>
    docker-compose up
  </code>
</pre>
Talvez ocorra um erro de permissão quando os comandos do arquivo .sh forem executados, neste caso, dentro do diretório "back", rode o seguinte comando:
<pre>
  <code>
    chmod +x ./docker_environment/entrypoint.sh
  </code>
</pre>

<h3>3. Inicie o servidor NextJS</h3>
Abra outro terminal no diretório "front" e rode o seguinte comando:
<pre>
  <code>
    npm run dev
  </code>
</pre>
Pronto, o setup já está concluído e você pode testar a aplicação.

<h2>:grinning: Como rodar os testes</h2>
Os testes escritos na aplicação são testes e2e, para simular uma requisição ao servidor. Para rodar os testes você deve estar no diretório "back" e rodar o seguinte comando:
<pre>
  <code>
    npm run test:e2e
  </code>
</pre>
É necessário estar com seu banco de dados local ligado (o mesmo que sobe junto com a aplicação num container). O ideal era criar um container novo (mongoDB) exclusivo para o teste rodar, e matar o processamento assim que os testes acabassem, mas isso ficou como TODO, assim como outras funcionalidades que não entraram na cobertura de testes e acabaram ficando como TODO.
