package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
)

type Host struct {
	Memory float64 `json:"memory"`
	CPU    float64 `json:"cpu"`
}

func Memory(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	me, err := mem.VirtualMemory()
	c, err := cpu.Percent(-6, true)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
	}

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	sum := 0.0
	for _, value := range c {
		sum += value
	}

	v := Host{me.UsedPercent, sum}
	if err := json.NewEncoder(w).Encode(v); err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
}
