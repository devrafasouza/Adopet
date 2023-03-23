## Contexto

Sistema destinado unicamente a facilitar a adoção de pets, através de postagens o pet pode encontrar um lar,
a postagem pode ser feita por qualquer um que se cadastrar no sistema. O sistema não trata de documentação de adoção sendo de responsabilidade dos usuários.

## Requisitos funcionais

RF01 - O sistema deve permitir que os usuários realizem seus cadastros, solicitando nome, e-mail, senha, avatar (opcional).<br>
RF02 - O sistema deve exigir que usuários realizem login para acessar o sistema.<br>
RF03 - O sistema deve permitir que usuários realizem postagens com título, descrição, imagem, telefone,  endereço (cep, cidade, bairro, rua e número(opcional)) e categoria.<br>
RF04 - O sistema deve permitir que usuários removam postagens de própria autoria.<br>
RF05 - O sistema deve permitir que usuários realizem alterações de perfil.<br>
RF06 - O sistema deve permitir que usuários filtrem os pets por categorias.<br>
RF07 - O sistema deve permitir que o usuário acesse determinada publicação.<br>
RF08 - O sistema deve permitir que o usuário interaja com a publicação desejada, permitindo-o entrar em contato direto com o usuário cuja publicação foi postada.<br>
RF09 - O sistema deve permitir que o usuário edite a própria postagem.<br>
RF10 - O sistema possuirá um usuário moderador que poderá fazer alterações e excluir postagens.<br>
RF11 - O sistema possuirá um usuário administrador que poderá criar categorias.<br>

## Testes

A estrategia de automação de teste compõem pela escolha da ferramenta Jest, onde vai ser criado testes automatizados para a aplicação de ponta a ponta, <br>
desde o backend nas rotas e serviços até no frontend nos componentes.

## Arquitetura

A arquitetura de alto nível é estruturada na separação em backend e frontend, ambos utilizam os principios de "Clean Code" e "SOLID".<br>

## Organização das pastas

![image](https://user-images.githubusercontent.com/44647477/227385838-277069fa-3b4b-4c26-99da-dabdd650543e.png)

/scr: armazenará todos arquivos principais da aplicação.<br>
/modules: armazenará entidades da aplicação.<br>
/shared: pasta que compartilhará todos os arquivos principais ligados ao resto da aplicação<br>
/infra: armazenará todos os arquivos e serviços ligados ao banco de dados e a aplicação.<br>
/http: pasta de rotas e suas configurações da aplicação.<br>
/repositories: irá armazenar os métodos de cada entidade.<br>
/useCases: pasta que irá conter os services (faz as validações com os dados que irão ser requisitados e retorna a informação validada) e os controllers (arquivos de rotas requisitadas pelos usuários)<br>


