import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.prepare();
  }

  async prepare() {
    await BarcodeScanner.prepare();
    this.startScan();
  }

  async startScan() {
    try {
      // Check camera permission
      await BarcodeScanner.checkPermission({ force: true });

      // Make background of WebView transparent
      BarcodeScanner.hideBackground();

      // Start scanning and wait for a result
      const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });

      // If the result has content
      if (result.hasContent) {
        console.log(result.content); // Log the raw scanned content

        this.askUserToOpenLink(result.content);
        

        // Redirigir a la página de inicio
        //this.router.navigate(['/inicio']); // Ajusta la ruta según la configuración de tus rutas
      }
    } catch (error) {
      console.error('Error during scanning:', error);
    } finally {
      // Show background and stop scanning (whether it was successful or not)
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    }
  }

  async askUserToOpenLink(link: string) {
    const userResponse = confirm(`¿Quieres abrir el enlace?\n${link}`);
  
    if (userResponse) {
      // Redirige a la página 'asistencia' con los datos del QR como parámetros
      this.router.navigate(['/asistencia'], { state: { qrData: link } });
    } else {
      // Si el usuario elige no abrir el enlace, redirige a la página de inicio
      this.router.navigate(['/asistencia']); // Ajusta la ruta según la configuración de tus rutas
    }
  }
}
