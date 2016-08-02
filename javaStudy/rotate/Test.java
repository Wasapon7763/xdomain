public class Test extends Thread{
    public static void main(String[] args){
	Test t1=new Test();
	int t=50;
	t1.start();
	try{
	    System.out.println("start!");
	    t1.join();
	    while (true){
		System.out.println("ヽ(ﾟ∀ﾟ)ﾉｷﾀ━━\n\n");
		sleep(t);
		System.out.println(" ( ﾟ∀)ﾉｷﾀ━━\n\n");
		sleep(t);
		System.out.println(" (　ﾟ)ﾉｷﾀ━━\n\n");
		sleep(t);
		System.out.println("ヽ(　)ﾉｷﾀ━━\n\n");
		sleep(t);
		System.out.println("ヽ(ﾟ　)ｷﾀ━━\n\n");
		sleep(t);
		System.out.println("ヽ(∀ﾟ )ﾉｷﾀ━━\n\n");
		sleep(t);
	    }
	} catch(InterruptedException e){ }
    }
    public void run(){
        for(int i = 3; i > 0; i--){
            System.out.println(i);
            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){}
        }
    }
}