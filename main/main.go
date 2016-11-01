package main

import (
	"fmt"
	"log"

	"app/controller"

	"net/http"

	"github.com/julienschmidt/httprouter"
)

type amine struct {
	name string
}

func (a amine) String() string {
	return "blabla"
}

func main() {

	router := httprouter.New()
	router.GET("/", controller.Index)
	router.GET("/containers", controller.Containers)
	router.GET("/images", controller.Images)
	router.GET("/hostmem", controller.Memory)
	fmt.Println("server Running in ", 8083)
	log.Fatal(http.ListenAndServe(":8083", router))

}
