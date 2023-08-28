# Créer un nouveau repository Git
-> git init
# Ajouter un fichier et le commiter
-> git add .
-> git commit -m "C1"
# Ajouter un deuxième fichier et le commiter
-> git add .
-> git commit -m "C2"
# Vérifier l'historique (on doit avoir 2 commits)
-> git log
# Annuler les modifications du dernier commit
-> git reset a713882b1d9c519c4b2d48f03b160487a55f3c98
# Vérifier l'historique (on doit avoir 2 commits)
-> git log
# Créer une branche à partir du 1er commit
-> git checkout -b branche_1 c1b781fad60d8c182c82d386907264c347d50690
# Lister les branches (on doit avoir 1 branche)
-> git branch
# Tagger la version
-> git tag mon_tag
# Revenir au sommet de la branche master
-> git checkout master
# Lister les tags (on doit avoir un tag)
-> git tag
# supprimer la branche
-> git branch -D branche_1
# Lister les branches (on doit avoir une seule branche : master)
-> git branch