package controller

import (
	"app/dockerCl"

	"encoding/json"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func Images(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
	images, err := dockerCl.GetImages()
	if err != nil {

		w.WriteHeader(http.StatusInternalServerError)
		w.Header().Add("Error", err.Error())
		return
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")

	if err := json.NewEncoder(w).Encode(images); err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
}
