import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RequestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.id = +value.id;
    return value;
  }
}
