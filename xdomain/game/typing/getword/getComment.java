import java.io.*;
import java.util.Scanner;
import java.util.Random;
import java.util.ArrayList;
public class getComment{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(); //the number of words                               
        String s;
        ArrayList<String> word=new ArrayList<String>();
        while (true){
            s=sc.nextLine();
            if (s.equals("end")) break;
            word.add(s);
        }
        String s1="[";
	String s2="[";
        Random rndm=new Random();
        for (int i=0;i<25;i++){
            int r=rndm.nextInt(word.size()-1)+1;
	    String hoge=word.get(r);
	    if ((hoge.substring(n+3,hoge.length()-6)).equals("")){
		i--;
		continue;
	    }
	    s1=s1+"\""+hoge.substring(n+3,hoge.length()-6)+"\""+", ";
	    s2=s2+"\""+hoge.substring(0,n)+"\""+", ";
	    
	}
	s1=s1+"];";
	s2=s2+"];";
	System.out.println(s1);
	System.out.println(s2);
    }
}
