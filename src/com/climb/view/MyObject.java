package com.climb.view;

import com.example.jsandjava.R;

import android.content.Context;  
import android.os.Handler;
import android.util.Log;  
import android.webkit.JavascriptInterface;  
import android.webkit.WebView;
import android.widget.Toast;  
    
public class MyObject {
			private Handler handler = null;
			private WebView webView = null;
	        /* 
	         * �󶨵�object���� 
	         *  
	        private Context context;  
	        public JSObject(Context context){  
	            this.context = context;  
	        }  */ 
	          public MyObject(MainActivity mainActivity,Handler handler){
	        	  this.webView = (WebView)mainActivity.findViewById(R.id.index);
	        	  this.handler = handler;
	          }
	          
	          @JavascriptInterface 
	          public void init(){
	        	  //ͨ��handler��ȷ��init������ִ�������߳���
	        	/*  handler.post(new Runnable(){

					@Override
					public void run() {
						// TODO Auto-generated method stub
						
					}
	        	  });*/
	        	  Log.i("aa", "bb");
	        	  webView.loadUrl("http://www.1473.cn");//javascript:al()
	          }
	        /* 
	         * JS����android�ķ��� 
	         * @JavascriptInterface��Ȼ�ز����� 
	         *  
	         * */  
	        @JavascriptInterface  
	        public String  JsCallAndroid(){  
	           // Toast.makeText(MainActivity.this, "JsCallAndroid", Toast.LENGTH_SHORT).show();  
	            return "JS call Andorid";  
	        }  
	}  
