# 3 - Explicação sobre alguns dos tipos de Network e alguns comandos:

## Tipos de Network

**Bridge**: Por padrão, as networks criadas no Docker são do tipo Bridge. Esse tipo de Network é a que possibilita que os vários containers que existam dentro do processo do Docker possam se encontrar. Seu uso é bem interessante no caso de um ***Docker Compose*** onde podemos desejar que alguns containers existam em uma rede separada, mas que se encontrem entre si:

    - Cria-se uma Network Bridge chamada "Minha Network";
    - Cria-se um container para uma API REST;
    - Cria-se um container para uma base de dados;
    - Cria-se um container para uma fila de mensageria;
    - Associa-se todos estes containers a Network "Minha Network";

Neste caso, todos os 3 containers acima iriam conseguir acessar uns aos outros sem dificuldade.

**Host**: Esse tipo de Network mescla a própria rede interna do Docker com a rede do Docker Host (em muitos casos, a nossa própria máquina). Muito útil em casos em que queremos que algum de nossos containers consigam acessar uma aplicação que esteja rodando fora do Docker, sem a necessidade de exposição explicita de uma porta do container com a do host:

    - Há um banco de dados rodando diretamente no Host (Nossa máquina);
    - Cria-se uma Network Host chamada "Minha Host Network";
    - Cria-se um container para uma API REST;
    - Cria-se um container para uma fila de mensageria;
    - Associa-se todos estes containers a Network "Minha HostNetwork";

Desta forma, os 2 containers podem se comunicar com a base de dados se necessáio.

**None**: Neste caso, cria-se uma Network completamente isolada, onde o container que a utilizar não poderá acessar NENHUM outro container ou serviço na máquina do Docker Host;

---

## Comandos
- Cria uma network com seu driver/tipo especificado (dentre os mencionados acima) com o nome **my-network**:
    ```shell
    $ docker network create --driver bridge my-network
    ```
- Lista todas as network criadas:
    ```shell
    $ docker network ls
    ```
- Remove uma ou mais networks:
    ```shell
    $ docker network rm network1,network2,...
    ```
- Remove todas as networks que não estiverem em uso:
    ```shell
    $ docker network prune
    ```
- Inspeciona uma network e lista dentro do objeto *containers* todos os containers que estam rodando dentro desta network:
    ```shell
    $ docker network inspect network1
    ```
    ```json
    [
    {
        "Name": "bridge",
        "Id": "33bd45a349969a64e35c00aef9d06e0035bf039e0bc12c46c26b31edfa7edc6b",
        "Created": "2023-01-16T21:11:14.3728424Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "504c18217bc038388260f6997315e1a53c545c832aff2eed19071f6a19f274be": {
                "Name": "ubuntu1",
                "EndpointID": "...",
                "MacAddress": "...",
                "IPv4Address": "172.17.0.2/16",
                "IPv6Address": ""
            },
            "6a1ef07955f048bf98b3f9a18df2065ccc0261e263bb6b01ba1b42ce86cf73de": {
                "Name": "ubuntu2",
                "EndpointID": "...",
                "MacAddress": "...",
                "IPv4Address": "172.17.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
    ```

