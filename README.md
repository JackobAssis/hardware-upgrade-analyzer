# 🔧 hardware-upgrade-analyzer



Um projeto CLI desenvolvido em **Node.js** que analisa automaticamente o hardware do seu sistema (CPU, GPU, RAM, SO) e utiliza **inteligência artificial da OpenAI** para sugerir atualizações personalizadas.  
Ideal para quem deseja turbinar o setup com upgrades conscientes e eficientes.

---

## 🚀 Funcionalidades

- 📡 **Detecção automática de hardware** (CPU, GPU, RAM, Sistema Operacional)
- 🤖 **Análise inteligente via OpenAI GPT** com recomendações de melhoria
- 🛒 **Integração futura com lojas parceiras** para sugerir peças compatíveis

---

## 📦 Requisitos

Antes de usar o projeto, verifique se você possui os seguintes itens:

- **Node.js** versão 18 ou superior
- **Sistema Linux** com utilitários como `lspci` instalados
- Conta ativa na [OpenAI](https://platform.openai.com/signup) com uma **API Key válida**
- Arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
OPENAI_API_KEY=sk-xxxxx...
⚙️ Instalação
Clone o repositório:

bash
Sempre exibir os detalhes

Copiar
git clone https://github.com/JackobAssis/hardware-upgrade-analyzer.git
cd hardware-upgrade-analyzer
Instale as dependências:

bash
Sempre exibir os detalhes

Copiar
npm install
Configure a variável de ambiente:

Crie um arquivo .env na raiz do projeto com sua chave de API da OpenAI:

bash
Sempre exibir os detalhes

Copiar
echo "OPENAI_API_KEY=sk-xxxxx..." > .env
💻 Como Executar
Existem duas formas de executar este projeto:

🔷 Usando Node.js diretamente
bash
Sempre exibir os detalhes

Copiar
node index.js
🔷 Usando NPM (recomendado)
Se o arquivo package.json já contiver o script:

json
Sempre exibir os detalhes

Copiar
"scripts": {
  "start": "node index.js"
}
Você pode executar com:

bash
Sempre exibir os detalhes

Copiar
npm start
🔍 Exemplo de Saída
bash
Sempre exibir os detalhes

Copiar
🔍 Detectando informações de hardware...

🖥  Sistema operacional: Linux
💻  Arquitetura: x64
🧠  CPU detectada: Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz
🎮  GPU detectada: Intel HD Graphics
💾  Memória RAM detectada: 8 GB (DDR3)

🤖 Sugestão de upgrade (via IA):
Para melhorar sua performance em tarefas modernas, considere trocar sua CPU por uma geração mais recente (Core i7 de 10ª geração ou superior) e adicionar mais memória RAM DDR4.
🧠 Como Funciona a Análise com IA?
O arquivo core/hardwareAdvisor.js envia os dados detectados do seu sistema para a API da OpenAI usando o modelo gpt-4. A IA então retorna sugestões personalizadas com base no desempenho atual do seu setup.

🔁 Caso não tenha acesso ao modelo gpt-4, edite o arquivo hardwareAdvisor.js e substitua "gpt-4" por "gpt-3.5-turbo".

🛠️ Erros Comuns e Soluções
Código	Descrição	Solução
429	Quota excedida	Verifique seus créditos na OpenAI
404	Modelo não encontrado	Altere para gpt-3.5-turbo em hardwareAdvisor.js

🙋 FAQ
1. O projeto funciona no Windows?
Atualmente, o foco está em sistemas Linux, pois depende de ferramentas como lspci. Adaptações futuras podem incluir compatibilidade com Windows e Mac.

2. Posso usar outros modelos da OpenAI?
Sim! Basta editar o modelo no arquivo hardwareAdvisor.js.

3. O sistema funciona offline?
Não. A análise depende de conexão com a API da OpenAI.

📌 Futuras Melhorias
Integração com APIs de lojas para sugestões de peças

Interface gráfica (GUI)

Suporte para mais sistemas operacionais

🤝 Contribuições
Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues, sugestões ou enviar pull requests.

📜 Licença
Distribuído sob a licença MIT.
Consulte LICENSE para mais informações.

 Desenvolvido com 💻 e ☕ por Jackob Assis
