package controller

import (
	"fmt"
	"net/http"

	"app/dockerAPI/containner"

	"encoding/json"

	"github.com/julienschmidt/httprouter"
)

//Index index handler
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	containners, err := containner.GetContainners()

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

//Containers List all Containers
func Containers(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	containners, err := containner.GetContainners()

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
