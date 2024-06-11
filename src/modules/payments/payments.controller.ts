import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @Post()
    create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.paymentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.paymentsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
        return this.paymentsService.update(+id, updatePaymentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.paymentsService.remove(+id);
    }
}
