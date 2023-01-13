# 2 - CMD-ENTRYPOINT

Explicação e diferença dos comandos CMD e ENTRYPOINT:

- **ENTRYPOINT**: É o comando que será SEMPRE executado assim que nosso container executar. No exemplo que criamos, definimos que o container sempre executará o seguinte comando e parâmetro:
```shell
$ echo "Hello"
```

- **CMD**: Pode ter 2 tipos de comportamentos:
    - *ENTRYPOINT Informado*: Caso o ENTRYPOINT esteja definido, os valores passados dentro do **CMD** serão enviados como parâmetros padrão para o que estiver sendo executado dentro no **ENTRYPOINT**. No nosso exemplo, é dentro dele que o valor ***"World"*** está sendo definido, completando a frase "***Hello World***";

    - *ENTRYPOINT Não Informado*: Caso o ENTRYPOINT não esteja definido, o comportamento do **CMD** será semelhante ao do próprio **ENTRYPOINT**, executando um comando com parâmetros assim que o container executar;
    

Obs: Um detalhe importante referente ao **CMD** é que ele pode ser substituído, enquanto o **ENTRYPOINT** SEMPRE será executado:
- ```$ docker run --name my-hello --rm rooxalotdev/my-hello:latest``` produz o resultado ***Hello World***

- ```$ docker run --name my-hello --rm rooxalotdev/my-hello:latest "Docker"``` produz o resultado ***Hello Docker***