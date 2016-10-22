package controller

import (
	"app/dockerAPI/image"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func Images(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
	images, err := image.GetImages()
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
