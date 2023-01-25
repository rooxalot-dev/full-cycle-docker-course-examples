# 5 - Multistage Building

Uma das coisas possíveis de se fazer no Docker é o Multistage building, que seria a possibilidade de se criar uma imagem final a partir de 2 ou mais imagens, utilizando-se de recursos das mesmas para assim obter um build final com as features/otimizações necessárias, como uma imagem mais leve no final.

Aquio neste exemplo, vemos que é possível chamar duas imagens diferentes e copiar arquivos entre elas, após os mesmos serem processados conforme necessídade:

```Dockerfile
#DEV/BUILDER
FROM node:16 as builder

WORKDIR /usr/src/app

COPY ./node/* .

RUN npm install

#PROD
FROM node:16-alpine as prod

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

CMD [ "node", "index.js" ]
```

No exemplo acima, utilizamos a imagem **node:16** (que damos um alias de **builder**) que é mais pesada poís trata-se de uma versão mais completa do Linux, e dentro dela, copiamos os arquivos da nossa máquina local e instalamos as dependências do node.

Após isso, utilizamos uma segunda imagem, a **node:16-alpine** (que damos um alias de **prod**) que é MUITO mais leve e contém somente o essencial para a execução de uma aplicação node, e copiamos de dentro da imagem anterior (builder), os arquivos e deixamos na nossa imagem final:

```Dockerfile
COPY --from=builder /usr/src/app .
```

Desta forma, se realizamos o build destas duas imagens utilizando-se dos 2 arquivos Dockerfile de Desenvolvimento e Produção presentes nesta pasta (*Dockerfile* e *Dockerfile.prod* respectivamente), temos duas imagens com uma diferença significativa de tamanho:

```shell
$ docker images

REPOSITORY                TAG       IMAGE ID       CREATED          SIZE 
rooxalotdev/my-node-app   prod      81e3830c6e64   14 seconds ago   120MB
rooxalotdev/my-node-app   latest    a23130e419b2   6 minutes ago    914MB
```