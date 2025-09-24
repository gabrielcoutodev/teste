# teste
n8n-nodes-random

Este repositório foi criado com o objetivo de implementar um nó personalizado para o n8n.
A ideia era desenvolver um nó simples, em TypeScript, seguindo a documentação oficial do n8n e utilizando o Docker para rodar localmente.

Durante o processo de configuração e testes, tive algumas dificuldades técnicas para compilar e rodar o projeto corretamente. Por conta disso, a versão atual pode não estar 100% funcional.

Mesmo assim, deixo aqui o código e a estrutura básica de como seria o nó, caso alguém queira revisar, testar ou dar continuidade.

Estrutura esperada
	
	•	src/ → Onde ficam os arquivos principais do nó
	
	•	dist/ → Saída gerada após a compilação do TypeScript
	
	•	package.json → Configuração do projeto
	
	•	tsconfig.json → Configuração do compilador TypeScript

Passos que segui
	
	1.	Criei a pasta do projeto e a estrutura de custom-nodes.
	
	2.	Configurei o package.json com as dependências necessárias.
	
	3.	Tentei compilar os arquivos com npm run build.

Observação

O projeto ainda não roda como esperado, mas pode servir de base para quem quiser explorar a criação de nós personalizados no n8n.
