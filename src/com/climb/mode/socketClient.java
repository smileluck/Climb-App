package com.climb.mode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Timer;
import java.util.TimerTask;

public class socketClient implements Runnable{

	private Socket socket = null;
	private BufferedReader br = null;
	private BufferedReader reader = null;
	private PrintWriter out = null;
	@Override
	public void run() {
		// TODO Auto-generated method stub
		try{
			ReConnect();
		    socket.sendUrgentData(0xFF);
		}catch(Exception ex){
			ReConnect();
		}
	}
	
	public void ReConnect(){
		try {
			socket = new Socket("10.10.10.12",5000);
			//socket = new Socket("10.10.10.69",5000);
			br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			reader = new BufferedReader(new InputStreamReader(System.in));
			out = new PrintWriter(socket.getOutputStream());
			Timer timer = new Timer();
			timer.schedule(new TimerTask(){
				public void run(){
					out.println("$nPm4L#");
					out.flush();
				}
			}, 1000, 3000);
			//new SendThread().start();
			new ReceiveThread().start();
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//发送一次
	public void sendOnce(String msg){
		//out = new PrintWriter(socket.getOutputStream());
		out.println(msg);
		out.flush();
	}
	//发送线程
	class SendThread extends Thread{
		public void run(){
			while(true){
				try { 
					String msg = null;
					msg = reader.readLine();          
					out.print(msg);
					out.flush();
	            } catch (Exception e) { 
	                e.printStackTrace(); 
	            } 
			}
		}
	}
	//接收线程
	class ReceiveThread extends Thread{
		public void run(){
			while(true){
				try {
					System.out.println(br.readLine());
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
}

