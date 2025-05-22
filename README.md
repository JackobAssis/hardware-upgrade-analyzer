# 🔧 Hardware Upgrade Analyzer

Este é um projeto de linha de comando que analisa o hardware da máquina onde está sendo executado e sugere possíveis upgrades com base em uma base de dados local. No futuro, será possível integrá-lo com uma IA e até lojas parceiras.

---

## 📌 Requisitos

- Node.js >= 16.x  
- Terminal com acesso à internet para instalar dependências  
- Permissão de leitura de hardware (não requer root/adm)

---

## 🧭 Estrutura do Projeto

hardware-upgrade-analyzer/
├── core/ # Lógica do sistema
├── cli/ # Arquivo principal de execução
├── data/ # Banco de dados local de upgrades
└── package.json # Gerenciador de dependências


---

## 💻 Como Executar

### 🔷 No Windows

1. **Abra o PowerShell ou Terminal do VSCode**

2. **Clone ou crie a estrutura:**

```bash
git clone https://github.com/JackobAssis/hardware-upgrade-analyzer.git
cd hardware-upgrade-analyzer

Ou crie manualmente as pastas core/, cli/ e data/ conforme mostrado acima.

# Instale as dependências:

npm install

# Execute:

node cli/main.js
