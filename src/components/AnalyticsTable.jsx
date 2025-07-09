import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useUrlStore from "../store/urlStore";

const AnalyticsTable = () => {
  const { urls } = useUrlStore();

  if (!urls.length) {
    return (
      <Typography variant="body1" align="center">
        No URL analytics available.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      {urls.map((urlData) => {
        const {
          originalUrl,
          shortcode,
          createdAt,
          expiresAt,
          clicks = [],
        } = urlData;

        return (
          <Accordion key={shortcode} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1">
                  🔗 {originalUrl}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Short URL: <strong>http://localhost:3000/{shortcode}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Created: {new Date(createdAt).toLocaleString()} | Expires:{" "}
                  {new Date(expiresAt).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Total Clicks: <strong>{clicks.length}</strong>
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {clicks.length === 0 ? (
                <Typography variant="body2">
                  No click data available yet.
                </Typography>
              ) : (
                <Paper elevation={1}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Timestamp</TableCell>
                        <TableCell>Referrer</TableCell>
                        <TableCell>Location</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clicks.map((click, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            {new Date(click.timestamp).toLocaleString()}
                          </TableCell>
                          <TableCell>{click.referrer || "Direct"}</TableCell>
                          <TableCell>
                            {click.location || "Unknown"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AnalyticsTable;
