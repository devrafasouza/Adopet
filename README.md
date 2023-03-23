Sistema destinado unicamente a facilitar a adoção de pets, através de postagens o pet pode encontrar um lar,
a postagem pode ser feita por qualquer um que se cadastrar no sistema. O sistema não trata de documentação de adoção sendo de responsabilidade dos usuários.

##Requisitos funcionais

RF01 - O sistema deve permitir que os usuários realizem seus cadastros, solicitando nome, e-mail, senha, avatar (opcional).(`<br>`)
RF02 - O sistema deve exigir que usuários realizem login para acessar o sistema.
RF03 - O sistema deve permitir que usuários realizem postagens com título, descrição, imagem, telefone,  endereço (cep, cidade, bairro, rua e número(opcional)) e categoria.
RF04 - O sistema deve permitir que usuários removam postagens de própria autoria.
RF05 - O sistema deve permitir que usuários realizem alterações de perfil.
RF06 - O sistema deve permitir que usuários filtrem os pets por categorias.
RF07 - O sistema deve permitir que o usuário acesse determinada publicação.
RF08 - O sistema deve permitir que o usuário interaja com a publicação desejada, permitindo-o entrar em contato direto com o usuário cuja publicação foi postada.
RF09 - O sistema deve permitir que o usuário edite a própria postagem.
RF10 - O sistema possuirá um usuário moderador que poderá fazer alterações e excluir postagens.
RF11 - O sistema possuirá um usuário administrador que poderá criar categorias.

## Testes

A estrategia de automação de teste compõem pela escolha da ferramenta Jest, onde vai ser criado testes automatizados para a aplicação de ponta a ponta, 
desde o backend nas rotas e serviços até no frontend nos componentes.

## Arquitetura

A arquitetura de alto nível é estruturada na separação em backend e frontend, ambos utilizam os principios de "Clean Code" e "SOLID".

## Organização das pastas

![image](https://user-images.githubusercontent.com/44647477/227385838-277069fa-3b4b-4c26-99da-dabdd650543e.png)

/scr: armazenará todos arquivos principais da aplicação.
/modules: armazenará entidades da aplicação.
/shared: pasta que compartilhará todos os arquivos principais ligados ao resto da aplicação
/infra: armazenará todos os arquivos e serviços ligados ao banco de dados e a aplicação.
/http: pasta de rotas e suas configurações da aplicação.
/repositories: irá armazenar os métodos de cada entidade.
/useCases: pasta que irá conter os services (faz as validações com os dados que irão ser requisitados e retorna a informação validada) e os controllers (arquivos de rotas requisitadas pelos usuários)


