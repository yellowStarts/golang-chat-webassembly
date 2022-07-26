package main

import (
	"log"
	"net/http"
)

const (
	AddSrv      = ":8080"
	TemplateDir = "../app/html"
)

func main() {
	fileSrv := http.FileServer(http.Dir(TemplateDir))

	err := http.ListenAndServe(AddSrv, fileSrv)

	if err != nil {
		log.Fatalln(err)
	}
}
