# Créer un nouveau repository Git
git init

# Ajouter un fichier et le commiter (C1)
git add .
git commit -m "C1"

# Modifier la première ligne du fichier et commiter (C2)
git add .
git commit -m "C2"

# Créer une feature branch B1 à partir de C1
git checkout -b B1 3f10086b17f05110d8f1aa5095804cb0ded0d1b6

# Faire une modification de la première ligne du fichier et commiter (C3)
git add .
git commit -m "C3"

# Merger B1 dans master en résolvant les conflits
git checkout master
git merge B1
git commit -m "merge branche B1"