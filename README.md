# Quotavel

Aplicação Web para compartilhamento e visualização de citações.

Projeto realizado para a disciplina de _Banco de Dados II_.

[Slides da apresentação 1](https://docs.google.com/presentation/d/1eOVgi8jZyIJD3BXMyyp7VRu8vI1hIh-jL0IsizUgYHk/edit?usp=sharing)

## Integrantes do grupo

- Karen Miyuki Massuda (14585868)
- Vivian Ayumi Miamura (14835140)
- Vítor Benvenisti Laguna Navarenho (14749425)

## Link do dataset

[quotes.csv](https://www.kaggle.com/datasets/manann/quotes-500k)

> Nota: o arquivo `quotes.csv` utilizado é uma versão modificada, sem a coluna "category".

## Instruções

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
# ou
pnpm dev
```

### Docker

```bash
sudo docker compose up -d
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Prisma

### Popular o banco de dados

```bash
npx prisma db seed
```

### Reset do banco de dados

```bash
npx prisma db push --force-reset
```

## Relatório do uso da IAG

- [ChatGPT] Geração de componentes visuais.
- [ChatGPT] Animação de componentes visuais.
- [ChatGPT] Geração de scripts para modificação do dataset quotes.csv
- [ChatGPT] Ajuda no setup do Docker
