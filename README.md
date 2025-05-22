# 🔧 Hardware Upgrade Analyzer

Este é um projeto de linha de comando que analisa o hardware da máquina onde está sendo executado e sugere possíveis upgrades com base em uma base de dados local. No futuro, será possível integrá-lo com uma IA e até lojas parceiras.


## 📌 Requisitos

- Node.js >= 16.x  
- Terminal com acesso à internet para instalar dependências  
- Permissão de leitura de hardware (não requer root/adm)


## 🧭 Estrutura do Projeto

hardware-upgrade-analyzer/
├── core/ # Lógica do sistema
├── cli/ # Arquivo principal de execução
├── data/ # Banco de dados local de upgrades
└── package.json # Gerenciador de dependências


## 💻 Como Executar

### 🔷 No Windows

1. **Abra o PowerShell ou Terminal do VSCode**

2. **Clone ou crie a estrutura:**


git clone https://github.com/JackobAssis/hardware-upgrade-analyzer.git
cd hardware-upgrade-analyzer


# Instale as dependências:

npm install

# Execute no terminal:

node index.js


# Você verá algo como:

[📊 Hardware Detectado]
┌────────────┬────────────────────────────┐
│ cpu        │ Intel Core i5-8265U       │
│ cores      │ 4                          │
│ speed      │ 1.6 GHz                    │
│ ram        │ 4.00 GB                    │
│ gpu        │ Intel UHD Graphics         │
│ baseboard  │ Lenovo LNVNB161216         │
└────────────┴────────────────────────────┘

[🧠 Sugestões de Upgrade]
┌────────────┬────────────────────────────────────────────┐
│ componente │ recomendacao                               │
├────────────┼────────────────────────────────────────────┤
│ RAM        │ Upgrade para no mínimo 8 GB                │
│ GPU        │ Instalar GPU dedicada (ex: GTX 1050...)    │
└────────────┴────────────────────────────────────────────┘
