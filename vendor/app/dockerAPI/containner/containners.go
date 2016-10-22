package containner

import (
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	"golang.org/x/net/context"
)

//GetContainners List all containers
func GetContainners() ([]types.Container, error) {
	cli, err := client.NewEnvClient()
	if err != nil {
		panic(err)
	}
	containers, err := cli.ContainerList(context.Background(), types.ContainerListOptions{All: true})
	if err != nil {
		return nil, err
	}
	//time.Sleep(10000 * time.Millisecond)
	return containers, err
}
