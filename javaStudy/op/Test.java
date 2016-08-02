public class Test extends Thread{
    public static void main(String args[]){
	Test t=new Test();
	t.start();
	try{
	    t.join();
	    System.out.println("Start!");
	    while (true){
		System.out.println("    　 _  　∩ \n　　(　゜∀゜)彡　                   \n　　(　    )  \n　 　|　　 |　 \n　 　し ⌒ Ｊ ");
		System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		sleep(100);
		System.out.println("    　 _ 　  \n　　(　゜∀゜)  　おっぱい!          \n　　(　  ⊂彡 \n　 　|　　 |　 \n　 　し ⌒ Ｊ ");
		System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		sleep(100);
	    }
	} catch(InterruptedException ie){}
    }
    public void run(){
	try{
	    for (int i=3;i>0;i--){
		System.out.println(i);
		sleep(1000);
	    }
	} catch(InterruptedException ie){}
    }
}