# 1 - Docker

Comandos iniciais para definição do Dockerfile:

- **FROM**: Define a imagem base utilizada para a criação da nossa imagem customizada. Toda imagem que criamos tem que ter uma imagem de base;
- **WORKDIR**: Define o diretório inicial em que nossos comandos subsequentes (RUN, CMD, etc) serão executados. Caso o diretório informado não exista, ele será criado;
- **RUN**: Executa um comando dentro da imagem, no shell da mesma. Muito utilizada para configurar as coisas dentro da imagem, como atualizar as bibliotecas existentes dela ou instalar dependências caso seja necessário;
- **COPY**: Copia um arquivo e/ou diretório na máquina HOST (Nossa máquina) para dentro da imagem, no diretório especificado.