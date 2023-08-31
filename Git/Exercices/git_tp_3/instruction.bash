# Créer un nouveau repository Git
git init

# Ajouter un fichier et le commiter (C1), le modifier et le commiter (C2)
git add .
git commit -m "un commentaire"

# Créer une branche B1 à partir de C1
git checkout -b B1 fd6a1e5f1a8d7a4e98aebc8c472408136b326eff

# Faire une modification du fichier et commiter C3
git add .
git commit -m "un commentaire"

# Rebase B1 dans master de manière à avoir un historique linéaire
git checkout master
git rebase B1
git add .
git commit -m "un commentaire"
git rebase --continue