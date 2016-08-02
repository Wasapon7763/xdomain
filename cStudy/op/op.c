#include <stdio.h>
#include <time.h>
int main(void){
  clock_t t1, t2;
  int changed=1, time;
  t1=clock();
  while (1){
    t2=clock();
    if (((int)(t2-t1)*10/CLOCKS_PER_SEC)!=time) changed=1;
    time=(int)(t2-t1)*10/CLOCKS_PER_SEC;
    if (changed){
      if (time%2==0){
	printf("    　 _  　∩ \n　　(　゜∀゜)彡　                   \n　　(　    )  \n　 　|　　 |　 \n　 　し ⌒ Ｊ \n");
	printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      }
      else {
	printf("    　 _ 　  \n　　(　゜∀゜)  　おっぱい!          \n　　(　  ⊂彡 \n　 　|　　 |　 \n　 　し ⌒ Ｊ \n");
	printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      }
      changed=0;
    }
  }
  return 0;
}

