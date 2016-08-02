#include <stdio.h>
#include <math.h>

#define X 64
#define Y 64

int main(void){
  int r[X][Y], g[X][Y], b[X][Y];
  FILE* fr;
  FILE* fw;
  fr = fopen("in.txt", "r");
  fw = fopen("out1.ppm", "w");

  fprintf(fw, "P3\n");
  fprintf(fw, "%d %d\n", X, Y);
  fprintf(fw, "255\n");

  for(int i=0; i<Y; i++){
    for(int j=0; j<X; j++){
      fscanf(fr, "%d", &r[j][i]);
      fscanf(fr, "%d", &g[j][i]);
      fscanf(fr, "%d", &b[j][i]);
      fprintf(fw, "%d %d %d \n", r[j][i], g[j][i], b[j][i]);
    }
  }
  fclose(fr);
  fclose(fw);
  return 0;
}
