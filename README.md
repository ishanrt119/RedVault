
# 🔐 RedVault

**RedVault** is a secure, AI-augmented digital vault built on the Internet Computer Protocol (ICP). It allows users to **store, manage, and share sensitive data**—such as passwords, documents, or credentials—through a decentralized, end-to-end encrypted environment.

Designed for both individuals and teams, RedVault ensures privacy, security, and trust without relying on centralized servers. Leveraging the power of **canisters** and **smart contracts** on the Internet Computer, RedVault brings next-generation security infrastructure to your fingertips.

---

## 🚀 Features

- 🔒 End-to-end encrypted file & data storage
- 🧠 AI-powered password and vault suggestions *(optional future scope)*
- 📂 Tag-based categorized vault management
- 🔐 Two-factor authentication (2FA) support
- 📤 Secure, time-limited, encrypted sharing links
- 📊 Analytics dashboard for activity logs and vault stats
- 🧾 Auto-generated strong passwords and note templates
- 🌐 Completely decentralized — powered by DFINITY and `dfx`

---

## 🛠 Tech Stack

| Layer         | Technology                         |
|---------------|-------------------------------------|
| Frontend      | React (Vanilla CSS, no Tailwind)   |
| Backend       | Motoko or Rust Canisters via DFX   |
| Smart Contracts | Internet Computer Protocol (ICP) |
| Auth          | Internet Identity / JWT            |
| Storage       | Canister-based decentralized blobs |
| Dev Tools     | `dfx`, `npm`, `candid`, `vessel`   |

---

## 📁 Project Structure

```

RedVault/
├── src/
│   ├── frontend/           # React frontend
│   └── backend/            # ICP Canister logic (Rust or Motoko)
├── .dfx/                   # DFX-generated config and build files
├── dfx.json                # Project configuration
├── package.json            # NPM package config
├── README.md               # Project README

````

---

## 🧑‍💻 Getting Started

### Prerequisites

- [Install DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Install Node.js & npm](https://nodejs.org/)
- [Install Rust (for Rust-based canisters)](https://www.rust-lang.org/tools/install)

---

## ⚙️ Commands

### 🔃 Initialize and Run Locally

```bash
cd RedVault/
dfx start --background
dfx deploy
````

Once deployed, visit your app at:

```
http://localhost:4943?canisterId={asset_canister_id}
```

### 🔄 Generate Candid (for backend changes)

```bash
npm run generate
```

### 🔧 Start Frontend Dev Server

```bash
npm start
```

Will run at:

```
http://localhost:8080
```

---

## 🌐 Deploying to the IC Mainnet

To deploy on the Internet Computer:

```bash
dfx deploy --network ic
```

> Note: You must have cycles and an identity configured for mainnet deployment.

---

## 📄 Frontend Environment Notes

If you're not using DFX to host the frontend, ensure the correct `DFX_NETWORK` environment is set:

* Set `DFX_NETWORK=ic` in your environment
* Or configure it via `dfx.json` using `env_override`

---

## 📚 Helpful Resources

* [Quick Start Guide](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
* [Rust Canister Guide](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
* [Motoko Docs](https://internetcomputer.org/docs/current/motoko/main/)
* [ic-cdk Docs](https://docs.rs/ic-cdk)
* [Candid Language Reference](https://internetcomputer.org/docs/current/developer-docs/backend/candid/)

---

## 🤝 Contributing

We welcome contributions! Please fork the repository, make your changes, and submit a pull request. Make sure your changes follow our code style guidelines.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

> ⚠️ This is a work-in-progress project created for educational and experimental purposes using the Internet Computer platform. Use responsibly in production.

```

