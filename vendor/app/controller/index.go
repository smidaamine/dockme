package controller

import (
	"app/dockerCl"
	"fmt"
	"net/http"

	"encoding/json"

	"github.com/julienschmidt/httprouter"
)

//Index index handler
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

}

//Containers List all Containers
func Containers(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	containners, err := dockerCl.GetContainners()

	if err != nil {

		w.WriteHeader(http.StatusInternalServerError)
		w.Header().Add("Error", err.Error())
		return

	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")

	if err := json.NewEncoder(w).Encode(containners); err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
}
