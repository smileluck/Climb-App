package com.climb.mode;

import android.os.Handler;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

import com.climb.view.MainActivity;
import com.example.jsandjava.R;

public class mainJObject {
        private Handler handler = null;
		private WebView webView = null;
		private socketClient client = null;
        /* 
         * �󶨵�object���� 
         *  
        private Context context;  
        public JSObject(Context context){  
            this.context = context;  
        }  */ 
          public mainJObject(WebView wv,socketClient client){
        	  webView = wv;
        	  handler = new Handler();  
        	  this.client =  client;
          }
          
          @JavascriptInterface 
          public void init(){
        	  //ͨ��handler��ȷ��init������ִ�������߳���  
              handler.post(new Runnable() {  
                  public void run() {  
                      //���ÿͻ���setContactInfo����  
                      webView.loadUrl("javascript:al()");  
                  }  
              });  
          }
        /* 
         * JS����android�ķ��� 
         * @JavascriptInterface��Ȼ�ز����� 
         *  
         * */  
        @JavascriptInterface  
        public void socketSend(String msg){  
        	client.sendOnce(msg);
        }  
}
