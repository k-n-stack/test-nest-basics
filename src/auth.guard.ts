import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

function validateToken(token: string): boolean {
  return true;
}

@Injectable()
export class AuthGuard implements CanActivate {

  logger: Logger = new Logger(AuthGuard.name); 

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = request?.headers?.['authorization']?.split(" ")[1];
      
      if(!token) {
        return false;
      }

      return validateToken(token);

    } catch(error) {

      this.logger.error(error);

      return false;
    }
  }
}
