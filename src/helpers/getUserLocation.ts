


export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((res,rej) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        res([ coords.longitude , coords.latitude ])
      },
      ( err ) => {
        console.log(err)
        rej();
      }
    )
  })



}