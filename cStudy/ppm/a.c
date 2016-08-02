#include <stdio.h>
#include <math.h>
#define X 64
#define Y 64
typedef struct{
  FILE* fw;
  int r[X][Y];
  int g[X][Y];
  int b[X][Y];
}Picture;
void read(FILE** f,  Picture* p){
  int i, j;
  *f=fopen("653.txt", "r");
  p->fw=fopen("out1.ppm", "w");
  for (i=0;i<Y;i++){
    for (j=0;j<X;j++){
      fscanf(*f, "%d", &(p->r[j][i]));
      fscanf(*f, "%d", &(p->g[j][i]));
      fscanf(*f, "%d", &(p->b[j][i]));
    }
  }
}
void write(Picture* p){
  int i, j;
  fprintf(p->fw, "P3\n");
  fprintf(p->fw, "%d %d\n", X, Y);
  fprintf(p->fw, "255\n");
  for (i=0;i<Y;i++){
    for (j=0;j<X;j++){
      int r=p->r[j][i], g=p->g[j][i], b=p->b[j][i];
      //int avg=0.2126 * r + 0.7152 * g + 0.0722 * b;
      //r=g=b=avg;
      if (sqrt((r-0)*(r-0)+(g-50)*(g-50)+(b-150)*(b-150))<=50){
	r=250;
	g=b=0;
      }
      fprintf(p->fw, "%d %d %d \n", r, g, b);
    }
  }
}
int main(void){
  FILE* fr;
  Picture pic;

  read(&fr, &pic);
  write(&pic);

  fclose(fr);
  fclose(pic.fw);
  return 0;
}

