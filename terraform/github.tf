provider "github" {
  # token = "efae2c63cb9c7cbf063df60162043e0b26cda3b7"
  organization = "CentralCatholic"
}

resource "github_repository" "steelhacks-repo" {
  name        = "OurSteelhacksRepo"
  description = "Go team go!"
  private = true
}

resource "github_repository_collaborator" "DanJustice" {
   repository = "${github_repository.steelhacks-repo.name}"
   depends_on = ["github_repository.steelhacks-repo"]
   username   = "danieljustice"
   permission = "admin"
}
