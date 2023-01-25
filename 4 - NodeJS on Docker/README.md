# 4 - Rodando NodeJs sem ter ele instalado na máquina

Uma das maravilhas de se ter o Docker instalado é a possibilidade de se executar um ambiente de desenvolvimento sem necessáriamente ter as suas dependências (frameworks, bibliotecas, etc) instalados na máquina host.

Aquio neste exemplo, vemos que é possível executar um simples servidor Express em NodeJS sem ter o mesmo instalado na máquina:

1. Primeiro executamos o comando a seguir de dentro da pasta "*4 - NodeJS on Docker*" (O comando está adaptado para sistemas UNIX):

    ```shell
    $ docker run -it --rm -p 3000:3000 -v "$(pwd)/node/":/usr/src/app node:16 bash
    ```

2. A partir do comando anterior, dentro do container, vamos até a pasta informada na criação do volume e rodamos o comando **npm start**:
    ```shell
    $ cd /usr/src/app
    $ cd npm start
    ```