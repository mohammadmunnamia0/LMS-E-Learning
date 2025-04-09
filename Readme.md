
## ✅ Goal:  
**Secondary GitHub account** theke **Primary account**-er ekta repo te code push korbo.

---

## 🔁 Whole Process Summary (Start to End):

---

### 🔷 1. Primary Account e Repo Create Koro
- Primary GitHub e giye ekta new repo create koro.
  - Example: `main-repo`
  - URL hobe: `https://github.com/PrimaryUsername/main-repo.git`

---

### 🔷 2. Secondary Account ke Collaborator Banano (Best Way)
1. Primary account e repo te giye → **Settings** e jao.
2. **Collaborators** (or “Manage Access”) section e dhuk.
3. **"Invite a collaborator"** e click kore Secondary account er username diye invite pathao.
4. Secondary account e login kore invite **accept** koro.

---

### 🔷 3. Clone the Repo from Secondary Account
Terminal e:

```bash
git clone https://github.com/PrimaryUsername/main-repo.git
cd main-repo
```

Optional: VS Code e open korte:

```bash
code .
```

---

### 🔷 4. Code Add & Push from Secondary Account
Je kono code update korar por:

```bash
git add .
git commit -m "your commit message"
git push origin main
```

---

### 🔷 5. Next Time Update Korle Just Eta Lagbe:
Jodi repo ekbar clone kora hoye thake:

```bash
cd main-repo
# code edit
git add .
git commit -m "your next update"
git push origin main
```

🚫 Kono `origin` set kora, token, ba deploy key use korar dorkar nai — since tumi collaborator already.

---

### 🔍 Extra Check:
Remote URL check korte:

```bash
git remote -v
```

Output e dekhe nite paro `origin` thik ache kina.

---

## 🏁 Done!

Ekhon theke secondary account theke easily code push korte parba primary account-er repo te — jeno nijer motoi!

---

Chaile ami ei process ta ekta mini **cheat sheet PDF** kore dite pari, jate future-e easily dekhte paro. Bolle baniye dei! 😄