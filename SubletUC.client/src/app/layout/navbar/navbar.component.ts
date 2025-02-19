import { Component, inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../../components/login/login.component';
import { alertify } from '../../models/Alertify';
import { AccountService } from '../../services/account.service';
import { AlertService, MessageSeverity, AlertDialog, DialogType, AlertCommand } from '../../services/alert.service';
import { AppTitleService } from '../../services/app-title.service';
import { AppTranslationService } from '../../services/app-translation.service';
import { AuthService } from '../../services/auth.service';
import { ConfigurationService } from '../../services/configuration.service';
import { LocalStoreManager } from '../../services/local-store-manager.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
