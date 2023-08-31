# Créer un nouveau repository git
git init

# Ajouter un fichier et le commiter (C1)
git add .
git commit -m "C1"

# Créer une feature branch B1 à partir de C1
git checkout -b B1

# Faire une modification du fichier et commiter (C2)
git add .
git commit -m "C2"

# Merger B1 dans master de manière à avoir un commit de merge dans master
git checkout master
git merge B1