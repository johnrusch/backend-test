import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  HttpStatus,
  Res,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { WidgetService } from './widget.service';

@Controller('widget')
export class WidgetController {
  constructor(private readonly widgetService: WidgetService) {}

  // Migrate other methods in a similar fashion
  @Get('profile/:profileId/:profileSlug/:numberOfReviews')
  async profile(
    @Param('profileId') profileId: number,
    @Param('profileSlug') profileSlug: string,
    @Param('numberOfReviews') numberOfReviews: number,
  ) {
    const apiResource = await this.widgetService.getProfile(
      profileId,
      profileSlug,
      numberOfReviews,
    );
    return this._buildJsonResource(apiResource);
  }

  @Get('orgProfile/:orgSlug/:idType/:id/:numberOfReviews')
  async orgProfile(
    @Param('orgSlug') orgSlug: string,
    @Param('idType') idType: string,
    @Param('id') id: string,
    @Param('numberOfReviews') numberOfReviews: number,
  ) {
    const apiResource = await this.widgetService.getOrgProfile(
      orgSlug,
      idType,
      id,
      numberOfReviews,
    );
    return this._buildJsonResource(apiResource);
  }

  @Get('orgSummary/:orgSlug')
  async orgSummary(@Param('orgSlug') orgSlug: string) {
    const apiResource = await this.widgetService.getOrgSummary(orgSlug);
    return this._buildJsonResource(apiResource);
  }

  @Get('orgGroup/:orgSlug/:groupSlug/:numberOfReviews/:pageNum')
  async orgGroup(
    @Param('orgSlug') orgSlug: string,
    @Param('groupSlug') groupSlug: string,
    @Param('numberOfReviews') numberOfReviews: number,
    @Param('pageNum') pageNum: number,
  ) {
    const apiResource = await this.widgetService.getOrgGroup(
      orgSlug,
      groupSlug,
      numberOfReviews,
      pageNum,
    );
    return this._buildJsonResource(apiResource);
  }

  @Get('reviews/:destination/:profileId/:profileSlug/:numberOfReviews/:pageNum')
  async reviews(
    @Param('destination') destination: string,
    @Param('profileId') profileId: number,
    @Param('profileSlug') profileSlug: string,
    @Param('numberOfReviews') numberOfReviews: number,
    @Param('pageNum') pageNum: number,
  ) {
    const apiResource = await this.widgetService.getReviews(
      destination,
      profileId,
      profileSlug,
      numberOfReviews,
      pageNum,
    );
    return this._buildJsonResource(apiResource);
  }

  @Get('reviewList/:typeOfIds/:idStr/:numberOfReviews')
  async reviewList(
    @Param('typeOfIds') typeOfIds: string,
    @Param('idStr') idStr: string,
    @Param('numberOfReviews') numberOfReviews: number,
  ) {
    const apiResource = await this.widgetService.getReviewList(
      typeOfIds,
      idStr,
      numberOfReviews,
    );
    return this._buildJsonResource(apiResource);
  }

//   @Post('export/:exportType/:orgSlug')
//   async handleLiveProfilesExport(
//     @Param('exportType') exportType: string,
//     @Param('orgSlug') orgSlug: string,
//     @Query('apikey') apiKey: string,
//     @Res() res: Response,
//   ) {
//     if (!exportType || !orgSlug || !apiKey) {
//       throw new HttpException(
//         'Error: Missing required parameters',
//         HttpStatus.BAD_REQUEST,
//       );
//     }

//     try {
//       const exportResult = await this.widgetService.handleLiveProfilesExport(
//         exportType,
//         orgSlug,
//         apiKey,
//       );

//       if (exportResult.status !== HttpStatus.OK) {
//         throw new HttpException(exportResult.message, exportResult.status);
//       }

//       res.setHeader('Content-Type', exportResult.contentType);
//       res.send(exportResult.data);
//     } catch (error) {
//       throw new HttpException(
//         error.message,
//         error.status || HttpStatus.INTERNAL_SERVER_ERROR,
//       );
//     }
//   }

  private _buildJsonResource(apiResource: any) {
    const jsonp = apiResource.jsonp;
    let objectAsString = JSON.stringify(apiResource);
    if (jsonp) {
      objectAsString = jsonp + '(' + objectAsString + ');';
    }
    return {
      contentType: jsonp ? 'application/javascript' : 'application/json',
      content: objectAsString,
    };
  }
}
